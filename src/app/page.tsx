import { IconGithub, IconNewspaper, IconTwitter } from "@/components/Icons"
import { TC } from "@/components/TC"
import { Button } from "@/components/buttons"
import { Accent } from "@/components/elements/Accent"
import { UnstyledLink } from "@/components/links"
import { ButtonLink } from "@/components/links/ButtonLink"

export default function Home() {
   return (
      <main>
         <HomeIntro />
      </main>
   )
}


const HomeIntro = () => {
   const socialLinkStyle = "inline-flex items-center gap-1 text-sm font-medium md:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent-light group"

   const socials = [
      {
         name: "Resume",
         icon: IconNewspaper,
         href: "https://google.com",
         label: "resume",
      },
      {
         name: "Twitter",
         icon: IconTwitter,
         href: "https://google.com",
         label: "@laupwing",
      },
      {
         name: "Github",
         icon: IconGithub,
         href: "https://google.com",
         label: "laupwing",
      },
   ]

   return (
      <section className="flex flex-col items-center justify-center h-screen-no-nav">
         <div className="custom-container">
            <h2 className="text-2xl font-bold md:text-4xl 2xl:text-5xl">
               Hello!
            </h2>
            <h1 className="mt-1 font-bold text-3xl md:text-5xl 2xl:text-6xl">
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
                     className={socialLinkStyle}
                  >
                     <social.icon 
                        className="shrink-0 w-5 h-5 transition-colors group-hover:text-[#1da1f2]"
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
            className="absolute bottom-0 right-6 transform-gpu w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px] h-[calc(100%-3rem)] md:h-[600px] 2xl:h-[900px] opacity-20 dark:opacity-10 stroke-dark dark:stroke-accent"
         />
      </section>
   )
}