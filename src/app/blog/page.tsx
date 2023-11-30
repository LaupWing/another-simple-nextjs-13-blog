import { BlogsContainer } from "@/components/containers/BlogsContainer.client"
import { Accent } from "@/components/elements/Accent"
import { getAllFilesFrontmatter } from "@/lib/mdx"
// import PostsSection from "./PostsSection"
// import { Metadata } from "next"
// import seo from "@/lib/seo"

const fetchBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")

   return blogs
}

// export const metadata: Metadata = {
//    ...seo({
//       asPath: "blog",
//       title: "Blog Page",
//       description: "Everything you related to web development regarding the technologies often used nowadays. Each week minimal 1 blog!"
//    })
// }

const Blog = async () => {
   const posts = await fetchBlogs()
   
   return (
      <main>
         <section className="custom-container py-12">
            <h1 className="text-3xl md:text-5xl">
               <Accent>Blog</Accent>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               Interesting tech findings.
            </p>
            <BlogsContainer 
               posts={posts}
            />
         </section>
      </main>
   )
}
export default Blog