import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { firstName, lastName, email, message } = req.body || {};

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Simple anti-header-injection safeguard:
  const safeEmail = String(email).replace(/[\r\n]/g, "");

  try {
    await sgMail.send({
      to: "righthandriley32@gmail.com",           // where you want to receive it
      from: "no-reply@YOURDOMAIN.COM",    // must be a verified sender in SendGrid
      replyTo: safeEmail,                 // so you can reply to the user easily
      subject: `New Contact Form: ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${safeEmail}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Email send failed" });
  }
}
