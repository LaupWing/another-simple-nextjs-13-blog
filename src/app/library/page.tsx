import { Accent } from "@/components/elements/Accent"
import { getAllFilesFrontmatter } from "@/lib/mdx"
import PostsSection from "./PostsSection"
import { Metadata } from "next"
import seo from "@/lib/seo"

const fetchLibrary = async () => {
   const library = await getAllFilesFrontmatter("library")

   return library
}

export const metadata: Metadata = {
   ...seo({
      asPath: "library",
      title: "Library Page",
      description: "Here's a collection of code snippets from various technologies that I have used before. Feel free to make use of them!"
   })
}

const Library = async () => {
   const posts = await fetchLibrary()

   return (
      <section className="layout py-12">
         <h1 className="text-3xl md:text-5xl">
            <Accent>Library</Accent>
         </h1>
         <p className="mt-2 text-gray-600 dark:text-gray-300">Here's a collection of code snippets from various technologies that I have used before. Feel free to make use of them!</p>
         <PostsSection 
            posts={posts}
         />
      </section>
   )
}
export default Library