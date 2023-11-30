import { extractSlug, getSessionId, getUserLikeCount } from "@/lib/helper.server"
import { prismaClient } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
   try {
      const sessionId = getSessionId(req)
      const slug = extractSlug(req)
      const likeCount = await getUserLikeCount({ sessionId, slug })
      
      if (likeCount >= 5) {
         throw new Error("Max like count is 5")
      }
      const content = await prismaClient.contentMeta.upsert({
         where: {
            slug: slug
         },
         create: {
            slug: slug,
            Like: {
               create: {
                  sessionId: sessionId
               }
            }
         },
         update: {
            Like:{
               create: {
                  sessionId: sessionId
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