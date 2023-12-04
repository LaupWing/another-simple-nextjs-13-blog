import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest, response: NextResponse) {
   console.log(request.body)
   const json = await request.json()
   console.log(json)
   return NextResponse.json({ message: "ok" })
}