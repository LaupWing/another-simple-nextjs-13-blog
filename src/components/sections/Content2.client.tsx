"use client"
import type { FC } from "react"

import { useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"

interface ContentProps {
   code: string
}
export const Content2:FC<ContentProps> = ({
   code
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])
   // console.log(code)
   console.log(Component)
   return (
      <section>
      </section>
   )
}