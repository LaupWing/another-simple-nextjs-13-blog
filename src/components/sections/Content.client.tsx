"use client"
import { LikeButton } from "@/components/buttons/index.client"
import { TableContents } from "@/components/sections/TableContents"
import { BlogFrontmatter } from "@/types/frontmatters"
import { FC, useMemo } from "react"
import { IconClock, IconEye, IconHistory } from "@/components/Icons"
import { Accent } from "@/components/elements/Accent"
import { CloudinaryImage } from "@/components/images/index.client"
import { UnstyledLink } from "@/components/links/index.client"
import { format } from "date-fns"
import { getMDXComponent } from "mdx-bundler/client"
import { MDXComponents } from "@/components/MDXComponents"
import useContentMeta from "@/hooks/useContentMeta"

interface ContentSectionProps {
   frontmatter: BlogFrontmatter
   code: string
}

const ContentSection:FC<ContentSectionProps> = ({
   code,
   frontmatter
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])

   return (
      <section className="layout">
         <Header 
            frontmatter={frontmatter}
         />
         <hr className="dark:border-gray-600" />
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
            <aside className="py-4">
               <div className="sticky top-36">
                  <TableContents 
                     slug={frontmatter.slug}
                  />
                  <div className="flex items-center justify-center py-8">
                     <LikeButton />
                  </div>
               </div>
            </aside>
         </section>
      </section>
   )
}
export default ContentSection

interface HeaderProps {
   frontmatter: BlogFrontmatter
}

const Header:FC<HeaderProps> = ({
   frontmatter
}) => {
   const COMMIT_HISTORY_LINK = `https://github.com/LaupWing/tech-blog/commits/main/src/contents/blog/${frontmatter.slug}.mdx`
   const meta = useContentMeta(frontmatter.slug, {
      runIncrement: true
   })
   
   return (
      <header className="pb-4">
         <CloudinaryImage
            publicId="samples/bike"
            alt="Bike"
            width={1200}
            height={(1200 * 2) /5}
            aspect={{
               height: 2,
               width: 5
            }}
         />
         <h1 className="mt-4">{frontmatter.title}</h1>
         <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Writton on{" "}
            {format(new Date(frontmatter.publishedAt), "MMMM dd, yyyy")} by
            Laup Wing
         </p>
         {frontmatter.lastUpdated && (
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200">
               <p>
                  Last updated{" "}
                  {format(new Date(frontmatter.lastUpdated), "MMMM dd, yyyy")}
                  .
               </p>
               <UnstyledLink
                  href={COMMIT_HISTORY_LINK}
                  className="inline-flex items-center gap-1 rounded-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-accent-light focus:outline-none focus-visible:ring focus-visible:ring-accent-dark"
               >
                  <IconHistory className="text-lg" />
                  <span>See changes</span>
               </UnstyledLink>
            </div>
         )}
         <div className="mt-6 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
               <IconClock className="inline-block text-base" />
               <Accent>{frontmatter.readingTime.text}</Accent>
            </div>
            <div className="flex items-center gap-1">
               <IconEye className="text-base inline-block" />
               {meta.isLoading ? (
                  <Accent className="animate-pulse"> --- views</Accent>
               ) :( 
                  <Accent>{meta.views} views</Accent>
               )}
            </div>
         </div>
      </header>
   )
}