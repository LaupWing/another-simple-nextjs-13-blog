import { extractSlug, getSessionId, getUserLikeCount } from "@/lib/helper.server"
import { prisma_client } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
   try {
      const session_id = getSessionId(req)
      const slug = extractSlug(req)
      const likeCount = await getUserLikeCount({ session_id, slug })
      
      if (likeCount >= 5) {
         throw new Error("Max like count is 5")
      }
      const content = await prisma_client.contentMeta.upsert({
         where: {
            slug: slug
         },
         create: {
            slug: slug,
            Like: {
               create: {
                  session_id: session_id
               }
            }
         },
         update: {
            Like:{
               create: {
                  session_id: session_id
               }
            }
         },
         include: {
            _count: {
               select: {
                  Like: true,
                  View: true
               }
            }
         }
      })
      return NextResponse.json({
         contentViews: content?._count.View ?? 0,
         contentLikes: content?._count.Like ?? 0,
         likesByUser: likeCount + 1
      }, {
         status: 201
      })
   } catch(e: unknown){
      if (e instanceof Error) {
         return NextResponse.json({
            message: e.message ?? "Internal Server Error"
         }, {
            status: 500
         })
      } else {
         return NextResponse.json({
            message: "Internal Server Error"
         }, {
            status: 500
         })
      }
   }
}