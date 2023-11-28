"use client"
import { ContentType, InjectedMeta, PickFrontmatter } from "@/types/frontmatters"
import { ContentMeta } from "@/types/meta"
import { useState, useEffect } from "react"
import useSwr from "swr"

export default function useInjectContentMeta<T extends ContentType>(
   frontmatter: Array<PickFrontmatter<T>>
) {
   const { data, isLoading } = useSwr<Array<ContentMeta>>(
      "/api/content"
   )

   type PopulatedContent = Array<PickFrontmatter<T> & InjectedMeta>

   const [populatedContent, setPopulatedContent] = useState<PopulatedContent>(
      () => [...frontmatter] as PopulatedContent
   )
   useEffect(() => {
      if (data){
         const mapped = frontmatter.map((fm) => {
            const views = data.find(meta => meta.slug === fm.slug)?._count.View
            const likes = data.find(meta => meta.slug === fm.slug)?._count.Like

            return {
               ...fm,
               views: views,
               likes: likes
            }
         })
         setPopulatedContent(mapped)
      }
   }, [data, isLoading, frontmatter])

   return populatedContent
}