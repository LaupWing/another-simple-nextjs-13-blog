import { IconEye, IconGithub, IconLink } from "@/components/Icons"
import { LikeButtonLoading } from "@/components/buttons/LikeButtonLoading"
import { Likes } from "@/components/elements/Likes"
import { CloudinaryImage } from "@/components/images/CloudinaryImage.client"
import { CustomLink } from "@/components/links/CustomLink"
import { Content } from "@/components/sections/Content.client"
import { TableContents } from "@/components/sections/TableContents.client"
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { ProjectFrontmatter } from "@/types/frontmatters"
import { Suspense } from "react"
import { Views } from "@/components/elements/Views"

const fetchProject = async (slug: string) => {
   const post = await getFileBySlug("projects", slug)

   return post as {
      code: string
      frontmatter: ProjectFrontmatter
   }
}

interface PageProps {
   params: {
      slug: string
   }
}

const SingleProjectPage = async (props: PageProps) => {
   const { frontmatter, code } = await fetchProject(props.params.slug)
   
   return (
      <section className="custom-container">
         <CloudinaryImage
            public_id="samples/bike"
            alt="Bike"
            width={1440}
            height={792}
         />
         <h1 className="mt-4">{frontmatter.title}</h1>
         <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {frontmatter.description}
         </p>
         <div className="mt-2 flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Suspense fallback={
               <div className="animate-pulse flex items-center gap-1">
                  <IconEye className="inline-block text-base" />
                  --- views
               </div>
            }>
               <Views 
                  slug={frontmatter.slug} 
               />
            </Suspense>
            
            {(frontmatter.github || frontmatter.link) && " - "}
            {frontmatter.github && (
               <div className="inline-flex items-center gap-2">
                  <IconGithub className="text-lg text-gray-800 dark:text-light" />
                  <CustomLink
                     href={frontmatter.github}
                     className="mt-1"
                  >
                     Repository
                  </CustomLink>
               </div>
            )}
            {frontmatter.link && (
               <div className="inline-flex items-center gap-2">
                  <IconLink className="text-lg text-gray-800 dark:text-light" />
                  <CustomLink
                     href={frontmatter.link}
                     className="mt-1"
                  >
                     Open Live Site
                  </CustomLink>
               </div>
            )}
            
         </div>
         <hr className="mt-4 dark:border-gray-600" />
         <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
            <Content
               code={code}
            />
            <aside className="py-4">
               <div className="sticky top-24">
                  <TableContents
                     slug={frontmatter.slug}
                  />
                  <div className="flex items-center justify-center py-8">
                     <Suspense fallback={<LikeButtonLoading />}>
                        <Likes slug={frontmatter.slug} />
                     </Suspense>
                     
                  </div>
               </div>
            </aside>
         </section>
      </section>
   )
}
export default SingleProjectPage

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("projects")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}