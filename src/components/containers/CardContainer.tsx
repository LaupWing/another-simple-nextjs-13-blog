"use client"
import { BlogCard } from "@/components/cards/BlogCard.client"
import useInjectContentMeta from "@/hooks/useInjectContentMeta"
import { BlogFrontmatter } from "@/types/frontmatters"
import { FC, JSX } from "react"

interface BlogCardsContainerProps {
   posts: BlogFrontmatter[],
   Cmp: FC<JSX.IntrinsicElements["li"] & { post: BlogFrontmatter }>
}

const BlogCardsContainer:FC<BlogCardsContainerProps> = ({
   posts,
   Cmp
}) => {
   const populatedBlogs = useInjectContentMeta(posts)

   return (
      <>
         {populatedBlogs.map(post => (
            <Cmp
               key={post.slug}
               post={post as BlogFrontmatter}
            />
         ))}
      </>
   )
}
export default BlogCardsContainer