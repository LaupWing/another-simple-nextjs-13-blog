"use client"
import type { FC } from "react"

import { useMemo } from "react"
import { BlogFrontmatter } from "@/types/frontmatters"
import { getMDXComponent } from "mdx-bundler/client"

interface ContentProps {
   frontmatter: BlogFrontmatter
   code: string
}
export const Content2:FC<ContentProps> = ({
   code,
   frontmatter
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])
   // console.log(code)
   console.log(Component)
   return (
      <section>
      </section>
   )
}