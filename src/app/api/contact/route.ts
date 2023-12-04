import nodemailer from "nodemailer"

export async function POST(request: Request) {
   console.log(request.body)
   const json = await request.json()
   console.log(json)
   return Response.json({ message: "ok" })
}