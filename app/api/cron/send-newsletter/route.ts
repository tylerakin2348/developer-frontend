import { NextResponse } from 'next/server';

import { query } from '../../../../lib/db';
import { sendEmail } from '../../../../lib/email/ses';

const BATCH_SIZE = 20;
const MAX_ATTEMPTS = 5;

type OutboxRow = {
  id: string;
  to_email: string;
  subject: string;
  html_body: string;
  attempts: number;
};

function isAuthorized(request: Request): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return false;
  }

  // EventBridge → Lambda (or curl) should send Authorization: Bearer <CRON_SECRET>.
  return request.headers.get('authorization') === `Bearer ${cronSecret}`;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const pendingResult = await query<OutboxRow>(
      `
        select id, to_email, subject, html_body, attempts
        from email_outbox
        where status = 'pending' and attempts < $1
        order by created_at asc
        limit $2
      `,
      [MAX_ATTEMPTS, BATCH_SIZE]
    );

    const pending = pendingResult.rows;
    let sent = 0;
    let failed = 0;

    for (const row of pending) {
      const nextAttempts = (row.attempts ?? 0) + 1;

      try {
        await sendEmail({
          to: row.to_email,
          subject: row.subject,
          html: row.html_body
        });

        await query(
          `
            update email_outbox
            set status = 'sent',
                attempts = $2,
                last_error = null,
                sent_at = now(),
                updated_at = now()
            where id = $1
          `,
          [row.id, nextAttempts]
        );

        sent += 1;
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown send error';
        const status = nextAttempts >= MAX_ATTEMPTS ? 'failed' : 'pending';

        await query(
          `
            update email_outbox
            set status = $2,
                attempts = $3,
                last_error = $4,
                updated_at = now()
            where id = $1
          `,
          [row.id, status, nextAttempts, message]
        );

        failed += 1;
      }
    }

    return NextResponse.json({
      ok: true,
      processed: pending.length,
      sent,
      failed
    });
  } catch (error) {
    console.error('send-newsletter cron failed', error);
    return NextResponse.json({ error: 'Cron job failed' }, { status: 500 });
  }
}
