import type { FC } from "react"
import { IconEye } from "../Icons"

interface ViewsProps {
   slug: string
}

export const Views:FC<ViewsProps> = async ({ slug }) => {
   const fetcTest  = async () => {
      await new Promise(resolve => {
         setTimeout(() => {
            resolve(true)
         }, 10000)
      })
   }
   await fetcTest()
   const res = await fetch("http://localhost:3000/api/view/" + slug, {
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