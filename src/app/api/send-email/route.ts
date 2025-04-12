import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, mobile, description } = await request.json();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mido_mam2@yahoo.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        ">
          <div style="
            background: linear-gradient(135deg, #4f46e5, #7c3aed);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            margin-bottom: 20px;
          ">
            <h2 style="
              margin: 0;
              font-size: 24px;
              font-weight: bold;
              text-align: center;
            ">New Contact Form Submission</h2>
          </div>
          
          <div style="
            padding: 20px;
            background-color: #f9fafb;
            border-radius: 0 0 8px 8px;
          ">
            <div style="
              margin-bottom: 15px;
              padding: 12px;
              background-color: white;
              border-radius: 6px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            ">
              <p style="margin: 0 0 8px 0; color: #4b5563;">
                <strong style="color: #1f2937;">Name:</strong> ${name}
              </p>
              <p style="margin: 0 0 8px 0; color: #4b5563;">
                <strong style="color: #1f2937;">Email:</strong> ${email}
              </p>
              <p style="margin: 0 0 8px 0; color: #4b5563;">
                <strong style="color: #1f2937;">Mobile:</strong> ${mobile}
              </p>
            </div>
            
            <div style="
              margin-top: 20px;
              padding: 12px;
              background-color: white;
              border-radius: 6px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            ">
              <h3 style="
                margin: 0 0 12px 0;
                color: #1f2937;
                font-size: 18px;
              ">Message</h3>
              <p style="
                margin: 0;
                color: #4b5563;
                line-height: 1.6;
              ">${description}</p>
            </div>
          </div>
          
          <div style="
            margin-top: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
          ">
            <p style="margin: 0;">This message was sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
