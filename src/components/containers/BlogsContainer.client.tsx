"use client"
import { IconCalendar, IconEye } from "@/components/Icons"
import { BlogCard } from "@/components/cards"
import { Tag } from "@/components/elements"
import { SortListBox, SortOption } from "@/components/elements/SortListBox.client"
import { ContentPlaceholder } from "@/components/sections/ContentPlaceholder"
import { getFromSessionStorage } from "@/lib/helpers"
import { getTags } from "@/lib/mdx-client"
import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters"
import { ChangeEvent, FC, useEffect, useState } from "react"

interface BlogsContainerProps {
   posts: Array<BlogFrontmatter>
}

const sortOptions: Array<SortOption> = [
   {
      id: "date",
      name: "Sort by date",
      icon: IconCalendar
   },
   {
      id: "views",
      name: "Sort by views",
      icon: IconEye
   }
]

export const BlogsContainer:FC<BlogsContainerProps> = ({
   posts
}) => {
   const [sortOrder, setSortOrder] = useState<SortOption>(
      () => sortOptions[Number(getFromSessionStorage("blog-sort")) || 0]
   )
   const tags = getTags(posts)
   const [search, setSearch] = useState<string>("")
   const [filteredPosts, setFilteredPosts] = useState<Array<BlogFrontmatter & InjectedMeta>>(
      () => [...posts]
   )

   useEffect(() => {
      const result = posts.filter((post) =>
         post.title.toLowerCase().includes(search.toLowerCase()) ||
         post.description.toLowerCase().includes(search.toLowerCase()) ||
         search.toLowerCase()
            .split(" ")
            .every((tag) => post.tags.includes(tag))
      )
      setFilteredPosts(result)
   }, [search])
   
   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }

   const toggleTag = (tag: string) => {
      if(search.includes(tag)){
         setSearch((s) =>
            s
               .split(" ")
               .filter((t) => t !== tag)
               .join(" ")
         )
      } else {
         setSearch((s) => (s !== "" ? `${s.trim()} ${tag}` : tag))
      }
   }

   const filteredTags = getTags(filteredPosts)

   return (
      <>
         <input 
            type="text" 
            className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light mt-4"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
         />
         <div className="mt-2 flex flex-wrap items-baseline justify-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Choose topic:</span>
            {tags.map((tag) => (
               <Tag
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  disabled={!filteredTags.includes(tag)}
               >
                  {tag}
               </Tag>
            ))}
         </div>
         <div className="relative z-10 mt-6 flex flex-col items-end gap-4 text-gray-600 dark:text-gray-300 md:flex-row md:items-center md:justify-between">
            <SortListBox 
               className="ml-auto"
               selected={sortOrder}
               setSelected={setSortOrder}
               options={sortOptions}
            />
         </div>
         <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredPosts.length > 0 ? (
               filteredPosts.map((post) => (
                  <BlogCard 
                     key={post.slug}
                     post={post}
                  />
               ))
            ): (
               <ContentPlaceholder />
            )}
         </ul>
      </>
   )
}