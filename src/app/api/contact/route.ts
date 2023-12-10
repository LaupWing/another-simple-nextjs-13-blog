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
         host: "smtpout.secureserver.net",
         port: 465,
         secure: true,
         auth: {
            user: process.env.GODADDY_EMAIL,
            pass: process.env.GODADDY_PASSWORD
         }
      })
      
      await transporter.sendMail({
         from: email,
         to: "loc@loc-nguyen.com",
         subject: `From contact Form Website: New message from ${name}`,
         text: message
      })
   
      // await prisma_client.contact.create({
      //    data: {
      //       name,
      //       email,
      //       message
      //    }
      // })
      
      return Response.json({ message: "ok" })
   } catch(err) {
      console.log(err)
   }

}