import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("Server is working 🔥");
});

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // EMAIL TO YOU
    const adminEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "YOUR_GMAIL@gmail.com",
      subject: subject,
      html: `
        <h2>New Appointment</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <pre>${message}</pre>
      `,
    });

    // CONFIRMATION EMAIL TO CUSTOMER
    const customerEmail = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Appointment Confirmation ✅",
      html: `
        <h2>Hello ${name},</h2>
        <p>Your appointment request has been received successfully.</p>
        <p>Our team will contact you soon.</p>
        <br>
        <p>Thank you ❤️</p>
      `,
    });

    res.status(200).json({
      success: true,
      adminEmail,
      customerEmail,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});