import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body as {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: "Sabhi fields required hain." });
    return;
  }

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];

  if (!gmailUser || !gmailPass) {
    req.log.error("GMAIL_USER ya GMAIL_APP_PASSWORD set nahi hai");
    res.status(500).json({ error: "Email service configure nahi hai." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${gmailUser}>`,
    to: gmailUser,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e2e8f0; padding: 32px; border-radius: 12px; border: 1px solid #1e293b;">
        <h2 style="color: #3b82f6; margin-top: 0;">New Message from Portfolio</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 100px;">Name:</td>
            <td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Subject:</td>
            <td style="padding: 8px 0; color: #f1f5f9;">${subject}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #1e293b; margin: 20px 0;" />
        <h4 style="color: #94a3b8; margin-bottom: 8px;">Message:</h4>
        <p style="color: #e2e8f0; line-height: 1.7; background: #111827; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #1e293b; margin: 20px 0;" />
        <p style="color: #475569; font-size: 12px; margin: 0;">
          Yeh message <strong>himanshubaghel.in</strong> ke portfolio contact form se aaya hai.<br/>
          Reply karne ke liye seedha is email ka reply button use karein.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    req.log.info({ from: email }, "Contact form email sent");
    res.json({ success: true, message: "Message successfully send ho gaya!" });
  } catch (err) {
    req.log.error({ err }, "Email send karne mein error");
    res.status(500).json({ error: "Message send nahi ho saka. Dobara try karein." });
  }
});

export default router;
