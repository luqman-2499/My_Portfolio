import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // default Resend domain
      to: "kingluqman2499@gmail.com", // your receiving email
      subject: "Test Email from Resend API 🚀",
      html: "<p>Hi Luqman! This is your first test email from Resend working successfully 🎉</p>",
    });

    console.log("✅ Email sent successfully:", data);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

sendTestEmail();
