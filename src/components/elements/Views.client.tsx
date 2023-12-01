import type { FC } from "react"
import { useEffect, useState } from "react"
import { IconEye } from "../Icons"
import { fakeAwait } from "@/lib/helpers"

interface ViewsProps {
   slug: string
}

export const Views:FC<ViewsProps> = ({ slug }) => {
   const [views, setViews] = useState<false|number>(false)
   const fetchViews = async () => {
      await fakeAwait()
      const res = await fetch(`${process.env.API_URL}/api/view/${slug}`, {
         method: "POST"
      })
      const data = await res.json()
      setViews(data.content_views)
   }

   useEffect(() => {
      fetchViews()
   }, [])

   return views ?  (
      <div className="flex items-center gap-1">
         <IconEye className="inline-block text-base" />
         {views} views
      </div>
   ) : (
      <div className="animate-pulse flex items-center gap-1">
         <IconEye className="inline-block text-base" />
         --- views
      </div>
   )
}