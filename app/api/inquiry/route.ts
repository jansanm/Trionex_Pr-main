import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, message, portfolioTitle } = await request.json()

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'trionex.services@gmail.com',
      subject: `Portfolio Inquiry: ${portfolioTitle}`,
      text: `Portfolio: ${portfolioTitle}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Portfolio:</b> ${portfolioTitle}</p><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Inquiry email send error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
} 