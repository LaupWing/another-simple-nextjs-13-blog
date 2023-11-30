import { IconGithub, IconNewspaper, IconTwitter } from "@/components/Icons"
import { TC } from "@/components/TC"
import { Button } from "@/components/buttons"
import { BlogCard } from "@/components/cards"
import { Accent } from "@/components/elements/Accent"
import { UnstyledLink } from "@/components/links/index.client"
import { ButtonLink } from "@/components/links/ButtonLink"
import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { Suspense } from "react"
import { attachContentMeta } from "@/lib/helpers"
import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters"

export default function Home() {
   return (
      <main>
         <HomeIntro />
         <Suspense fallback={"loading"}>
            <HomeBlogs />
         </Suspense>
         <Suspense fallback={"loading"}>
            <HomeProjects />
         </Suspense>
      </main>
   )
}


const HomeIntro = () => {
   const social_link_style = "inline-flex items-center gap-1 text-sm font-medium md:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent-light group"

   const socials = [
      {
         name: "Resume",
         icon: IconNewspaper,
         href: "https://google.com",
         label: "resume",
         className: "",
      },
      {
         name: "Twitter",
         icon: IconTwitter,
         href: "https://google.com",
         label: "@laupwing",
         className: "group-hover:text-[#1da1f2]",
      },
      {
         name: "Github",
         icon: IconGithub,
         href: "https://google.com",
         label: "laupwing",
         className: ""
      },
   ]

   return (
      <section className="flex flex-col items-center justify-center h-screen-no-nav">
         <div className="custom-container">
            <h2 className="text-2xl text-dark dark:text-light font-bold md:text-4xl 2xl:text-5xl">
               Hello!
            </h2>
            <h1 className="mt-1 text-dark dark:text-light font-bold text-3xl md:text-5xl 2xl:text-6xl">
               My name is <Accent>Loc Nguyen</Accent>
            </h1>
            <p className="mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl">
               I possess a strong enthusiasm for both programming and fitness, finding fulfillment in assisting individuals either at the gym or in the realm of coding.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 md:!text-lg">
               <div className="group relative flex">
                  <div
                     className="absolute -inset-0.5 animate-pulse rounded blur from-custom-green bg-gradient-to-r to-custom-purple opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
                  />
                  <ButtonLink 
                     href="/blog"
                     variant="gradient-animation"
                  >
                     Read the Blog
                  </ButtonLink>
               </div>
               <Button >
                  Learn more about me
               </Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
               {socials.map((social) => (
                  <UnstyledLink
                     key={social.name}
                     href={social.href}
                     className={social_link_style}
                  >
                     <social.icon 
                        className={"shrink-0 w-5 h-5 transition-colors " + social.className}
                        aria-hidden="true"
                     />
                     <span className="sr-only">
                        {social.name}
                     </span>
                  </UnstyledLink>
               ))}
            </div>
         </div>
         <TC
            className="absolute bottom-0 right-6 transform-gpu w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px] h-[calc(100%-3rem)] md:h-[600px] 2xl:h-[900px] opacity-20 dark:opacity-10 stroke-slate-400 dark:stroke-accent"
         />
      </section>
   )
}

const fetchRecentBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")
   const recent_blogs = getRecent(blogs)
   
   return (await attachContentMeta<"blog">(recent_blogs))
}


const HomeBlogs = async () => {
   const recent_blogs = await fetchRecentBlogs()
   console.log(recent_blogs)
   return (
      <section className="py-20">
         <div className="custom-container">
            <h2 
               id="projects" 
               className="text-2xl font-semibold md:text-4xl"
            >
               <Accent>Recent Blog Posts</Accent>
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               {recent_blogs.map((post, i) => (
                  <BlogCard
                     key={post.slug}
                     post={post}
                  />
               ))}
            </ul>
            <ButtonLink
               className="mt-4"
               href="/blog"
               // Add tracking event
            >
               See more post
            </ButtonLink>
         </div>
      </section>
   )
}

const fetchRecentProjects = async () => {
   const projects = await getAllFilesFrontmatter("projects")
   const recent_projects = getRecent(projects)
   
   return recent_projects
}

const HomeProjects = async () => {
   const recent_projects = await fetchRecentProjects()

   return (
      <section className="py-20">
         <article className="custom-container">
            <h2 id="projects" className="text-2xl md:text-4xl">
               <Accent>Recent Projects</Accent>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               My most recent awesome projects.
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               {recent_projects.map((project) => (
                  <ProjectCard
                     key={project.slug}
                     project={project}
                  />
               ))}
            </ul>
            <ButtonLink
               className="mt-4"
               href="/projects"
               // Add tracking event
            >
               See more projects
            </ButtonLink>
         </article>
      </section>
   )
}

const fetchRecentLibrary = async () => {
   const library = await getAllFilesFrontmatter("library")

   const recentLibrary = getRecent(library)

   return recentLibrary
}

const HomeLibrary = async () => {
   const recentLibrary = await fetchRecentLibrary()

   return (
      <section className="py-20">
         <article className="layout">
            <h2 className="text-2xl md:text-4xl" id="library">
               <Accent>Libary of Code Snippets</Accent>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               List of code snippets. What is documented is never lost.
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               
               {/* {recentLibrary.map((snippet, i) => (
                  <LibraryCard
                     key={snippet.slug}
                     snippet={snippet}
                  />
               ))} */}
            </ul>
            <ButtonLink
               className="mt-4"
               href="/library"
               // Add tracking event
            >
               See more snippets
            </ButtonLink>
         </article>
      </section>
   )
}