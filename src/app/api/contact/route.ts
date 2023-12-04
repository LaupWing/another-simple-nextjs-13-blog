import nodemailer from "nodemailer"

export async function POST(request: Request) {
   const data = await request.json()
   const { name, email, message } = data
   
   return Response.json({ message: "ok" })
}