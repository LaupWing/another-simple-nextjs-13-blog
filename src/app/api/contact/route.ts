import { prisma_client } from "@/lib/prisma"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
   const data = await request.json()
   const { name, email, message } = data
   
   try {
      const transporter = nodemailer.createTransport({
         host: "smtpout.secureserver.net",
         port: 465,
         secure: true,
         auth: {
            user: process.env.GODADDY_EMAIL,
            pass: process.env.GODADDY_PASSWORD
         }
      })
      
      const test = await transporter.sendMail({
         from: email,
         to: "loc@loc-nguyen.com",
         subject: `New message from ${name}`,
         text: message
      })
      console.log(test)
   
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