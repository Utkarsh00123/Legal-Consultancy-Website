import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Resend with the provided API key
const resend = new Resend('re_Uf4CG9zP_4kGju5xivpCVBLHE3KXrjqmc');

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, location, practiceArea, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Resend testing domain
      to: 'cutkarsh134@gmail.com',
      subject: `New Legal Consultation Request from ${name}`,
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

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
