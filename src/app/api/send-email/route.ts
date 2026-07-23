import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildContactEmail({
  name,
  email,
  mobile,
  description,
}: {
  name: string;
  email: string;
  mobile: string;
  description: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMobile = escapeHtml(mobile);
  const safeDescription = escapeHtml(description).replaceAll("\n", "<br>");
  const sentAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New portfolio message</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f766e 0%,#14b8a6 55%,#2dd4bf 100%);padding:28px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.8);font-weight:600;">
                      Portfolio contact
                    </p>
                    <h1 style="margin:0;font-size:24px;line-height:1.3;color:#ffffff;font-weight:700;">
                      New message from ${safeName}
                    </h1>
                  </td>
                  <td align="right" valign="top" style="padding-left:16px;">
                    <div style="display:inline-block;background:rgba(255,255,255,0.18);color:#ffffff;font-weight:700;font-size:14px;padding:8px 12px;border-radius:999px;">
                      MK.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#475569;">
                Someone reached out through your portfolio contact form.
              </p>
            </td>
          </tr>

          <!-- Contact details -->
          <tr>
            <td style="padding:16px 32px 8px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;font-weight:600;">Name</p>
                    <p style="margin:0;font-size:15px;color:#0f172a;font-weight:600;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;border-bottom:1px solid #e2e8f0;">
                    <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;font-weight:600;">Email</p>
                    <p style="margin:0;font-size:15px;">
                      <a href="mailto:${safeEmail}" style="color:#0f766e;text-decoration:none;font-weight:600;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 20px;">
                    <p style="margin:0 0 4px 0;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;font-weight:600;">Mobile</p>
                    <p style="margin:0;font-size:15px;">
                      <a href="tel:${safeMobile}" style="color:#0f172a;text-decoration:none;font-weight:600;">${safeMobile}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:16px 32px 8px 32px;">
              <p style="margin:0 0 10px 0;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#94a3b8;font-weight:600;">Message</p>
              <div style="background-color:#ffffff;border:1px solid #e2e8f0;border-left:4px solid #14b8a6;border-radius:12px;padding:18px 20px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;">${safeDescription}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding:24px 32px 8px 32px;" align="center">
              <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: Your message on my portfolio`)}"
                 style="display:inline-block;background-color:#0f766e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 22px;border-radius:10px;">
                Reply to ${safeName}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px 28px 32px;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#94a3b8;text-align:center;">
                Received ${sentAt}<br />
                Sent from Mahmoud Khalil Portfolio
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const text = [
    `New portfolio message from ${name}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Mobile: ${mobile}`,
    "",
    "Message:",
    description,
    "",
    `Received: ${sentAt}`,
  ].join("\n");

  return { html, text };
}

export async function POST(request: Request) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailTo =
      process.env.EMAIL_TO || "mahmoudkhalil6987@gmail.com";

    if (!emailUser || !emailPassword) {
      console.error(
        "Missing EMAIL_USER or EMAIL_PASSWORD environment variables"
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set EMAIL_USER and EMAIL_PASSWORD.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, mobile, description } = body ?? {};

    if (!name || !email || !mobile || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const { html, text } = buildContactEmail({
      name: String(name),
      email: String(email),
      mobile: String(mobile),
      description: String(description),
    });

    await transporter.sendMail({
      from: `"Mahmoud Khalil Portfolio" <${emailUser}>`,
      to: emailTo,
      replyTo: String(email),
      subject: `New message from ${String(name)} — Portfolio`,
      text,
      html,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
