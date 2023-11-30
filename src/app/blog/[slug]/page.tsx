import { IconClock, IconEye, IconHistory } from "@/components/Icons"
import { Accent } from "@/components/elements"
import { CloudinaryImage } from "@/components/images/CloudinaryImage.client"
import { UnstyledLink } from "@/components/links/UnstyledLink.client"
import { TableContents } from "@/components/sections/TableContents.client"
import { Content } from "@/components/sections/index.client"
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { CHAD_PATH } from "@/lib/svg"
import { BlogFrontmatter } from "@/types/frontmatters"
import { format } from "date-fns"
import { Metadata } from "next"
import { FC, Suspense } from "react"
// import seo from "@/lib/seo"

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("blog")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}

// export async function generateMetadata(props: PageProps): Promise<Metadata> {
//    const post = await fetchPost(props.params.slug)
//    const { frontmatter } = post

//    const OG_BANNER_LINK = `https://res.cloudinary.com/laupwing/image/upload/f_auto,c_fill,ar_4:5,w_1200/samples/sheep.jpg`
   
//    return {
//       ...seo({
//          isBlog: true,
//          banner: OG_BANNER_LINK,
//          templateTitle: frontmatter.title,
//          title: frontmatter.title,
//          description: frontmatter.description
//       })
//    }
// }

const fetchPost = async (slug: string) => {
   const post = await getFileBySlug("blog", slug)
   return post as {
      code: string
      frontmatter: BlogFrontmatter
   }
} 

interface PageProps {
   params: {
      slug: string
   }
}

const SingleBlogPage = async (props: PageProps) => {
   const post = await fetchPost(props.params.slug)
   const {
      frontmatter,
      code
   } = post

   return (
      <main className="custom-container">
         <Header
            frontmatter={frontmatter}
            slug={props.params.slug}
         />
         <hr className="dark:border-gray-600" />
         <section className="lg:grid pt-4 pb-8 lg:grid-cols-[auto,250px] lg:gap-8">
            <Content
               code={code}
            />
            <aside className="py-4">
               <div className="sticky top-24">
                  <TableContents
                     slug={frontmatter.slug}
                  />
                  <div className="flex items-center justify-center py-8">
                     <Suspense>

                     </Suspense>
                     <div className="animate-pulse flex items-center space-x-4">
                        <svg
                           viewBox="0 0 231.18 354.53"
                           className="text-gray-500 fill-current w-14"
                        >
                           <path d={CHAD_PATH} />
                        </svg>
                        <div className="text-gray-400 dark:text-gray-500 mt-1 text-lg font-medium">
                           <span>...</span>
                        </div>
                     </div>
                     {/* <LikeButton /> */}
                  </div>
               </div>
            </aside>
         </section>
      </main>
   )
}

export default SingleBlogPage

interface HeaderProps {
   frontmatter: BlogFrontmatter
   slug: string
}

const Header:FC<HeaderProps> = async ({
   frontmatter,
   slug
}) => {
   const COMMIT_HISTORY_LINK = `https://github.com/LaupWing/tech-blog/commits/main/src/contents/blog/${frontmatter.slug}.mdx`
   
   return (
      <header className="pb-4">
         <CloudinaryImage
            public_id="samples/bike"
            alt="Bike"
            width={1200}
            height={(1200 * 2) /5}
            aspect={{
               height: 2,
               width: 5
            }}
         />
         <h1 className="mt-4 dark:text-light">{frontmatter.title}</h1>
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
               <Suspense fallback={<Accent className="animate-pulse"> --- views</Accent>}>
                  <Views 
                     slug={slug} 
                  />
               </Suspense>
            </div>
         </div>
      </header>
   )
}

interface ViewsProps {
   slug: string
}

const Views:FC<ViewsProps> = async ({ slug }) => {
   const fetcTest  = async () => {
      await new Promise(resolve => {
         setTimeout(() => {
            resolve(true)
         }, 1000)
      })
   }
   await fetcTest()
   const res = await fetch("http://localhost:3000/api/content/" + slug, {
      method: "POST"
   })
   const data = await res.json()
   console.log(data)

   return (
      <Accent>1000</Accent>
   )
}

interface LikesProps {
   slug: string
}

const Likes:FC<LikesProps> = async ({ slug }) => {
   const fetcTest  = async () => {
      await new Promise(resolve => {
         setTimeout(() => {
            resolve(true)
         }, 1000)
      })
   }
   await fetcTest()
   const res = await fetch("http://localhost:3000/api/content/" + slug, {
      method: "POST"
   })
   const data = await res.json()
   console.log(data)

   return (
      <Accent>1000</Accent>
   )
}