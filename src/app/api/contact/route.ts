import { prisma_client } from "@/lib/prisma"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
   const data = await request.json()
   const { name, email, message } = data
   try {
      const transporter = nodemailer.createTransport({
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD
         }
      })
   
      await transporter.sendMail({
         from: email,
         to: process.env.GMAIL_USER,
         subject: `New message from ${name}`,
         text: message
      })
   
      await prisma_client.contact.create({
         data: {
            name,
            email,
            message
         }
      })
      
      return Response.json({ message: "ok" })
   } catch(err) {
      console.log(err)
   }

}