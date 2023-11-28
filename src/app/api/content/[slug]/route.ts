import { extractSlug, getSessionId, getUserLikeCount } from "@/lib/helper.server"
import { prisma_client } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET(req: Request) {
   try{
      const slug = extractSlug(req)
      const session_id = getSessionId(req)
      const likesByUser = await getUserLikeCount({
         session_id: session_id,
         slug: slug
      })
      const content = await prisma_client.contentMeta.findFirst({
         where: {
            slug: slug
         },
         include: {
            _count: {
               select: {
                  View: true,
                  Like: true
               }
            }
         }
      })

      return NextResponse.json({
         contentViews: content?._count.View ?? 0,
         contentLikes: content?._count.Like ?? 0,
         likesByUser: likesByUser
      }, {
         status: 200
      })
   } catch(e: unknown){
      console.log(e)
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

export async function POST(req: Request) {
   try {
      const session_id = getSessionId(req)
      const slug = extractSlug(req)
      const content = await prisma_client.contentMeta.upsert({
         where: {
            slug: slug
         },
         create: {
            slug: slug,
            View: {
               create: {
                  session_id: session_id
               }
            }
         },
         update: {
            View:{
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
         contentLikes: content?._count.Like ?? 0
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