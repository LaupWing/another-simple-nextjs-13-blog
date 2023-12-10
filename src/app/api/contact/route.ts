import { prisma_client } from "@/lib/prisma"
import nodemailer from "nodemailer"
import * as EmailValidator from "email-validator"

export async function POST(request: Request) {
   const data = await request.json()
   const { name, email, message } = data
   
   try {
      if(!EmailValidator.validate(email)) {
         return Response.json({ message: "invalid email" })
      }
      const transporter = nodemailer.createTransport({
         host: "smtp-mail.outlook.com",
         port: 587,
         secure: false,
         auth: {
            user: process.env.GODADDY_EMAIL,
            pass: process.env.GODADDY_PASSWORD
         }
      })
      
      await transporter.sendMail({
         from: "loc@loc-nguyen.com",
         to: "loc@loc-nguyen.com",
         subject: `From contact Form Website: New message from ${name} email is ${email}`,
         text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
         `
      })
   
      await prisma_client.contact.create({
         data: {
            name,
            email,
            message
         }
      })
      
      return Response.json({ message: "success" })
   } catch(err) {
      console.log(err)
   }

}