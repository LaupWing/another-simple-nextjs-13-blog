import type { FC } from "react"
import { IconEye } from "../Icons"
import { fakeAwait } from "@/lib/helpers"

interface ViewsProps {
   slug: string
}

export const Views:FC<ViewsProps> = async ({ slug }) => {
   await fakeAwait()
   const res = await fetch(`${process.env.API_URL}/api/view/${slug}`, {
      method: "POST"
   })
   const data = await res.json()

   return (
      <div className="flex items-center gap-1">
         <IconEye className="inline-block text-base" />
         {data.content_views} views
      </div>
   )
}