import type { FC } from "react"

import { LikeButton } from "../buttons/LikeButton"

interface LikesProps {
   slug: string
}

export const Likes:FC<LikesProps> = async ({ slug }) => {
   const syntheticAwait  = async () => {
      await new Promise(resolve => {
         setTimeout(() => {
            resolve(true)
         }, 1000)
      })
   }
   await syntheticAwait()
   const res = await fetch(`${process.env.SITE_URL}/api/like/${slug}`, {
      method: "GET"
   })
   const data = await res.json()
   
   return (
      <LikeButton
         all_likes={data.all_likes}
         likes_by_user={data.likes_by_user}
      />
   )
}