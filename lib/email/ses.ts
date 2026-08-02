import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

let sesClient: SESv2Client | null = null;

function getSesClient(): SESv2Client {
  if (sesClient) {
    return sesClient;
  }

  sesClient = new SESv2Client({
    region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || 'us-east-1'
  });

  return sesClient;
}

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
}): Promise<{ id?: string }> {
  const from = process.env.SES_FROM_EMAIL;
  if (!from) {
    throw new Error('Missing SES_FROM_EMAIL');
  }

  const result = await getSesClient().send(
    new SendEmailCommand({
      FromEmailAddress: from,
      Destination: { ToAddresses: [options.to] },
      Content: {
        Simple: {
          Subject: { Data: options.subject, Charset: 'UTF-8' },
          Body: {
            Html: { Data: options.html, Charset: 'UTF-8' }
          }
        }
      }
    })
  );

  return { id: result.MessageId };
}
