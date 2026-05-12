import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key")
    const { name, phone, email, date, time, service, message } = await request.json()

    if (!name || !phone || !email || !date || !time || !service || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const html = `
    <div style="background-color:#FAF5EF;padding:40px 0;font-family:'Georgia',serif;color:#2C1B11;">
      <div style="max-width:600px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.05);">
        
        <div style="background-color:#2C1B11;padding:24px;text-align:center;">
          <h1 style="color:#FAF5EF;font-size:24px;margin:0;">Omega Clinic</h1>
          <p style="color:#C9A675;margin:4px 0 0 0;font-size:14px;">BY DR. M. MOHAN</p>
        </div>

        <div style="padding:32px;">
          <h2 style="text-align:center;font-size:22px;margin-bottom:12px;">New Appointment Booked</h2>
          <p style="text-align:center;color:#7A6E65;margin-bottom:28px;">
            A new client has booked an appointment through your official website.
          </p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;font-weight:bold;width:40%;font-family:'Georgia',serif;">Client Name:</td>
              <td style="padding:10px 0;font-family:'Poppins',Arial,sans-serif;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;font-family:'Georgia',serif;">Phone Number:</td>
              <td style="padding:10px 0;font-family:'Poppins',Arial,sans-serif;letter-spacing:0.5px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;font-family:'Georgia',serif;">Email Address:</td>
              <td style="padding:10px 0;font-family:'Poppins',Arial,sans-serif;">
                <a href="mailto:${email}" style="color:#C9A675;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;font-family:'Georgia',serif;">Appointment Date:</td>
              <td style="padding:10px 0;font-family:'Poppins',Arial,sans-serif;">${date}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;font-family:'Georgia',serif;">Preferred Time:</td>
              <td style="padding:10px 0;font-family:'Poppins',Arial,sans-serif;">${time}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;font-family:'Georgia',serif;">Type of Service:</td>
              <td style="padding:10px 0;font-family:'Poppins',Arial,sans-serif;">${service}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:bold;font-family:'Georgia',serif;vertical-align:top;">Message:</td>
              <td style="padding:10px 0;font-family:'Poppins',Arial,sans-serif;">${message.replace(/\n/g, "<br>")}</td>
            </tr>
          </table>

          <div style="border-top:1px solid #E8DED6;padding-top:16px;font-size:14px;color:#7A6E65;">
            <p>📅 Appointment requested via your official website.</p>
            <p>Please contact the client to confirm the appointment time.</p>
          </div>
        </div>

        <div style="background-color:#FAF5EF;padding:16px;text-align:center;font-size:13px;color:#7A6E65;">
          <p style="margin:0;">© ${new Date().getFullYear()} Omega Clinic. All rights reserved.</p>
          <p style="margin:4px 0 0 0;">
            📍 Salem, Tamil Nadu |
            <a href="https://omegaclinic.com" style="color:#C9A675;text-decoration:none;">Visit Website</a>
          </p>
        </div>
      </div>
    </div>
    `

    const result = await resend.emails.send({
      from: "Omega Clinic <onboarding@resend.dev>",
      to: "omegaclinicslm@gmail.com",
      subject: `New Appointment from ${name}`,
      html,
    })

    console.log("Resend API result:", JSON.stringify(result, null, 2))

    if (result.error) {
      console.error("Resend error details:", JSON.stringify(result.error, null, 2))
      return Response.json({ error: result.error.message || "Failed to send email" }, { status: 500 })
    }

    return Response.json({ success: true, message: "Email sent successfully", id: result.data?.id }, { status: 200 })
  } catch (error) {
    console.error("Catch error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
