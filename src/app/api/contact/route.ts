import nodemailer from "nodemailer"

export async function POST(request: Request) {
   const data = await request.json()
   const { name, email, message } = data

   const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
         user: process.env.GMAIL_USER,
         pass: process.env.GMAIL_APP_PASSWORD
      }
   })
   
   return Response.json({ message: "ok" })
}