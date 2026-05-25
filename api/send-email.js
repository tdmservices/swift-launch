import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {

    const {
      name,
      email,
      phone,
      subject,
      message
    } = req.body;

    // EMAIL TO YOU
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@swiftlaunch.co.UK",
      subject: subject,
      html: `
        <h2>New Appointment</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <pre>${message}</pre>
      `
    });

    // EMAIL TO CUSTOMER
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Appointment Confirmed ✅",
      html: `
        <h2>Hello ${name}</h2>
        <p>Your appointment request has been received successfully.</p>
        <p>We will contact you soon.</p>
      `
    });

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}