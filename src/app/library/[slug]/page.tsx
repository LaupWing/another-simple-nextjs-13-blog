import { getFileBySlug, getFiles } from "@/lib/mdx"
import { LibraryFrontmatter } from "@/types/frontmatters"
import { FC } from "react"
// import ContentSection from "../../components/library/ContentSection.client"
// import { Metadata } from "next"
// import seo from "@/lib/seo"

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("library")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}

const fetchPost = async (slug: string) => {
   const post = await getFileBySlug("library", slug)
   return post as {
      code: string
      frontmatter: LibraryFrontmatter
   }
} 

// export async function generateMetadata(props: PageProps): Promise<Metadata> {
//    const post = await fetchPost(props.params.slug)
//    const { frontmatter } = post
   
//    return {
//       ...seo({
//          title: frontmatter.title,
//          description: frontmatter.description
//       })
//    }
// }

interface PageProps {
   params: {
      slug: string
   }
}

const SingleLibraryPage = async (props: PageProps) => {
   const post = await fetchPost(props.params.slug)
   const {
      frontmatter,
      code
   } = post
   return (
      <main className="custom-container">
         
      </main>
   )
}
export default SingleLibraryPage

interface HeroProps {
   frontmatter: LibraryFrontmatter
}

const Hero:FC<HeroProps> = ({ frontmatter }) => {
   return (
      <div className="border-b pb-4 dark:border-gray-600">
         <h1>{frontmatter.title}</h1>
         <p className="mt-2 text-sm border-gray-600 dark:text-gray-300">
            {frontmatter.description}
         </p>
         <div className="mt-2 flex items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
               <IconEye className="inline-block text-base" />
               {meta.isLoading ? (
                  <Accent className="animate-pulse"> --- views</Accent>
               ) :( 
                  <Accent>{meta.views} views</Accent>
               )}
            </div>
            <span>•</span>
            <TechIcons 
               techs={frontmatter.tags.split(",") as Array<TechListType>}
            />
         </div>
      </div>
   )
}