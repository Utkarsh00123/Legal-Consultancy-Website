import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
  try {
    const data = await resend.emails.send({
      from: `Test <onboarding@resend.dev>`,
      to: 'apjurischambers@gmail.com',
      reply_to: 'test@example.com',
      subject: `New Legal Consultation Request`,
      html: `<p>Test</p>`,
    });
    console.log('Success:', data);
  } catch (error) {
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
  }
}

test();
