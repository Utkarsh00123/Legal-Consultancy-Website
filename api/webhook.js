import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Security: strict allowlist
const ALLOWED_SENDERS = ['apjurischambers@gmail.com'];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // Vercel serverless functions parse JSON body automatically, but svix verify needs raw string.
  // req.body is already parsed, so we JSON.stringify it for verify, or use standard body
  const payload = JSON.stringify(req.body);
  const id = req.headers['svix-id'];
  const timestamp = req.headers['svix-timestamp'];
  const signature = req.headers['svix-signature'];

  if (!id || !timestamp || !signature) {
    return res.status(400).send('Missing headers');
  }

  try {
    const event = resend.webhooks.verify({
      payload,
      headers: { id, timestamp, signature },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET,
    });

    if (event.type === 'email.received') {
      // Security check
      if (!ALLOWED_SENDERS.includes(event.data.from.toLowerCase())) {
        return res.status(200).send('OK');
      }

      // Get full email
      const { data: email, error } = await resend.emails.receiving.get(event.data.email_id);
      
      if (error) {
        console.error('Error fetching email:', error);
        return res.status(500).send('Error fetching email');
      }

      // Notify user instantly
      console.log('Received email:', email);
    }

    return res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook verification failed:', error);
    return res.status(400).send('Webhook verification failed');
  }
}
