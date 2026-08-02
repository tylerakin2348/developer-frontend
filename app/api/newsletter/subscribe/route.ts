import { NextResponse } from 'next/server';

import { query } from '../../../../lib/db';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    const subscriberResult = await query<{ id: string; email: string; status: string }>(
      `
        insert into subscribers (email, status)
        values ($1, 'active')
        on conflict (email) do update
          set status = excluded.status,
              updated_at = now()
        returning id, email, status
      `,
      [email]
    );

    const subscriber = subscriberResult.rows[0];

    try {
      await query(
        `
          insert into email_outbox (to_email, subject, html_body)
          values ($1, $2, $3)
        `,
        [
          email,
          'Thanks for subscribing',
          `
        <p>Hi,</p>
        <p>Thanks for joining the newsletter. I’ll share occasional notes on web engineering, accessibility, and product work.</p>
        <p>— Tyler</p>
      `.trim()
        ]
      );
    } catch (outboxError) {
      console.error('email_outbox insert failed', outboxError);
    }

    return NextResponse.json({ ok: true, subscriber });
  } catch (error) {
    console.error('newsletter subscribe failed', error);
    return NextResponse.json({ error: 'Unable to subscribe right now.' }, { status: 500 });
  }
}
