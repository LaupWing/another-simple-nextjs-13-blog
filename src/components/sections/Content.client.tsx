"use client"
import type { FC } from "react"

import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { MDXComponents } from "@/components/MDXComponents"

interface ContentProps {
   code: string
}
export const Content:FC<ContentProps> = ({
   code
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])
   // console.log(code)
   console.log(MDXComponents)
   return (
      <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
         <article className="mdx mt-4 projects prose mx-auto w-full transition-colors dark:prose-invert">
            <Component
               components={
                  {
                     ...MDXComponents
                  } as any
               }
            />
         </article>
         {/* <aside className="py-4">
            <div className="sticky top-36">
               <TableContents 
                  slug={frontmatter.slug}
               />
               <div className="flex items-center justify-center py-8">
                  <LikeButton />
               </div>
            </div>
         </aside> */}
      </section>
   )
}