import { Content2 } from "@/components/sections/index.client"
// import { Content } from "@/components/sections/index.client"
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { BlogFrontmatter } from "@/types/frontmatters"
// import ContentSection from "../../components/blog/ContentSection.client"
import { Metadata } from "next"
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
      <main>
         <Content2
            code={code}
            frontmatter={frontmatter}
         />
      </main>
   )
}

export default SingleBlogPage