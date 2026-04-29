import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend with the provided API key
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, location, practiceArea, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: `Legal Consultation <contact@apjurischambers.in>`,
      to: 'apjurischambers@gmail.com',
      reply_to: email,
      subject: `New Legal Consultation Request from ${name || 'a client'}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>
        <p><strong>Practice Area:</strong> ${practiceArea || 'Not provided'}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(error.statusCode || 400).json({ success: false, error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
