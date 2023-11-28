import { prisma_client } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
   const content = await prisma_client.contentMeta.findMany({
      include: {
         _count: {
            select: {
               View: true,
               Like: true
            }
         }
      }
   })
   // Sort by slug
   return NextResponse.json(content.sort((a, b) => a.slug.localeCompare(b.slug)), {
      status: 200
   })
}