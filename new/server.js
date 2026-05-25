import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.post("/send-email", async (req, res) => {

  try {

    console.log("📩 Request received:", req.body);

    const { name, email, phone, subject, message } = req.body;

    const data = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "your-email@gmail.com",

      subject: `New Form: ${subject}`,

      html: `
        <h2>New Form Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✅ Email sent:", data);

    res.json({
      success: true
    });

  } catch (error) {

    console.log("❌ ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});