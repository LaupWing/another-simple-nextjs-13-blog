import type { FC } from "react"

import { LikeButton } from "../buttons/LikeButton"
import { fakeAwait } from "@/lib/helpers"

interface LikesProps {
   slug: string
}

export const Likes:FC<LikesProps> = async ({ slug }) => {
   await fakeAwait()
   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/like/${slug}`, {
      method: "GET"
   })
   const data = await res.json()
   console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/like/${slug}` )
   
   return (
      <LikeButton
         all_likes={data.all_likes}
         likes_by_user={data.likes_by_user}
      />
   )
}