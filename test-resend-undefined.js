import { Resend } from 'resend';

const resend = new Resend(undefined);

async function test() {
  try {
    const data = await resend.emails.send({
      from: `Test <onboarding@resend.dev>`,
      to: 'apjurischambers@gmail.com',
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
