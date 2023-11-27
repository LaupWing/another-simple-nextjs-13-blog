import { createHash } from "crypto"
import { z } from "zod"
import { prisma_client } from "./prisma"

export const getSessionId = (req: Request) => {
   const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0"

   const currentUserId = createHash("md5")
      .update(ipAddress + (process.env.IP_ADDRESS_SALT as string), "utf8")
      .digest("hex")
   return currentUserId
} 

export const extractSlug = (req: Request) => {
   const splitted = req.url.split("/")
   const availableEndpoints = ["content", "like"]

   if(availableEndpoints.includes(splitted[splitted.length - 2])){
      const slug = z.string().parse(splitted[splitted.length - 1])
      return slug
   }else {
      throw new Error("Not a content API endpoint")
   }
}

export const getUserLikeCount = async ({
   session_id,
   slug
}: {
   session_id: string
   slug: string
}) => {
   return await prisma_client.like.count({
      where: {
         session_id: session_id,
         ContentMeta: {
            slug: slug
         }
      }
   })
}