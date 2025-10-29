// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// app.use(
//   cors({
//     origin: "https://my-portfolio-beta-two-33.vercel.app",
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );

// app.use(express.json());

// const PORT = process.env.PORT || 5000;

// // Test route
// app.get("/", (req, res) => {
//   res.send("Email backend running");
// });

// // -------------------- SEND EMAIL ROUTE --------------------
// app.post("/send-email", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.Email, // your Gmail
//         pass: process.env.EMAIL_PASS, // App password
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: email, // user who filled the form
//       to: process.env.Email, // your Gmail to receive emails
//       subject: `New message from ${name} via Portfolio`,
//       text: message,
//       html: `<p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Message:</strong> ${message}</p>`,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });
// // ------------------------------------------------------------

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





// --------------------------- IMPORTS ---------------------------
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

// --------------------------- CONFIG ----------------------------
dotenv.config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: "https://my-portfolio-beta-two-33.vercel.app", // DEPLOYMENT 
    //  origin: "http://localhost:5173", // LOCAL HOST TESTING
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;

// --------------------------- TEST ROUTE ------------------------
app.get("/", (req, res) => {
  res.send("✅ Email backend running successfully!");
});

// ------------------------ SEND EMAIL ROUTE ---------------------
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Send email using Resend
    const data = await resend.emails.send({
      from: `Portfolio <${process.env.FROM_EMAIL}>`, // Resend sender
      to: process.env.TO_EMAIL, // Your receiving email
      reply_to: email, // User's email for easy reply
      subject: `New message from ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>📩 New Message from Portfolio Contact Form</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log("✅ Email sent:", data);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ error: "Something went wrong while sending email" });
  }
});

// --------------------------- START SERVER -----------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


