export async function handler() {
  const baseUrl = process.env.APP_BASE_URL;
  const cronSecret = process.env.CRON_SECRET;

  if (!baseUrl || !cronSecret) {
    throw new Error('Missing APP_BASE_URL or CRON_SECRET');
  }

  const url = `${baseUrl.replace(/\/$/, '')}/api/cron/send-newsletter`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${cronSecret}`
    }
  });

  const body = await response.text();

  if (!response.ok) {
    console.error('Cron invoke failed', response.status, body);
    throw new Error(`Cron HTTP ${response.status}`);
  }

  console.log('Cron invoke ok', body);
  return { statusCode: 200, body };
}
