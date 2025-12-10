'use server'
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendEmail(to: string, subject: string, html: string) {
  const mailOptions = {
    from: "Kueree <" + process.env.EMAIL_USER + ">",
    to,
    subject,
    html,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false }
  }
}
