import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, phone, service, message } = body

    /* -------------------- Validation -------------------- */
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      )
    }

    const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background:#f9fafb; padding:20px;">
      
      <div style="background:#1e40af; padding:30px; border-radius:12px 12px 0 0; text-align:center;">
        <h1 style="color:#fff; margin:0;">New Contact Request</h1>
        <p style="color:#dbeafe; margin-top:8px;">Nexus Accounting</p>
      </div>

      <div style="background:#fff; padding:30px; border-radius:0 0 12px 12px;">
        <h2 style="border-bottom:2px solid #1e40af; padding-bottom:10px; color:#1e293b;">Contact Details</h2>

        <table style="width:100%; border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0; font-weight:bold; color:#475569;">Name:</td>
            <td style="color:#1e293b;">${name}</td>
          </tr>
          <tr style="background:#f1f5f9;">
            <td style="padding:10px; font-weight:bold; color:#475569;">Email:</td>
            <td style="padding:10px;">
              <a href="mailto:${email}" style="color:#1e40af; text-decoration:none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0; font-weight:bold; color:#475569;">Phone:</td>
            <td>
              <a href="tel:${phone}" style="color:#1e40af; text-decoration:none;">${phone}</a>
            </td>
          </tr>
          <tr style="background:#f1f5f9;">
            <td style="padding:10px; font-weight:bold; color:#475569;">Service:</td>
            <td style="padding:10px; color:#1e293b;">${service || "Not specified"}</td>
          </tr>
        </table>

        <div style="margin-top:25px;">
          <h3 style="margin-bottom:10px; color:#1e293b;">Message</h3>
          <p style="white-space:pre-line; background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #1e40af; color:#334155; line-height:1.6;">
            ${message}
          </p>
        </div>

        <p style="margin-top:25px; font-size:13px; color:#64748b;">
          <strong>Received:</strong> ${new Date().toLocaleString()}
        </p>
      </div>

      <div style="text-align:center; margin-top:15px; font-size:12px; color:#94a3b8;">
        <p>This email was generated from your website contact form.</p>
        <p style="margin-top:5px;">555 Republic Drive Suite 213, Plano TX 75074</p>
        <p style="margin-top:5px;">972-744-9881 | Info@nexusacct.com</p>
      </div>

    </div>
    `

    /* -------------------- SMTP Transport - Gmail -------------------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "weathersportifyteam@gmail.com",
        pass: "stnyiaraqnatomgs", // Gmail App Password
      },
    })

    /* -------------------- Send Email -------------------- */
    await transporter.sendMail({
      from: `"Nexus Accounting Contact" <weathersportifyteam@gmail.com>`,
      to: "Info@nexusacct.com",
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: emailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Contact API Error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    )
  }
}