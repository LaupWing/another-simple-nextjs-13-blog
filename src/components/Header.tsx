"use client"
import { usePathname } from "next/navigation"
import { FC, useEffect, useState } from "react"
import clsx from "clsx"
import { UnstyledLink } from "./links"
// import { ThemeButton } from "./buttons/index.client"

interface HeaderProps {
   large?: boolean
}
export const Header:FC<HeaderProps> = () => {
   const [onTop, setOnTop] = useState<boolean>(false)
   const pathname = usePathname()
   
   useEffect(() => {
      const handleScroll = () => {
         setOnTop(window.scrollY > 0)
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   const links = [
      { 
         href: "/",
         label: "Home",
         segement: null
      },
      { 
         href: "/blog",
         label: "Blog",
         segement: "blog"
      },
      { 
         href: "/projects",
         label: "Projects",
         segement: "projects"
      },
      { 
         href: "/library",
         label: "Library",
         segement: "library"
      },
      { 
         href: "/about",
         label: "About",
         segement: "about"
         
      },
   ]
   
   return (
      <header className={clsx(
         "sticky top-0 z-50 transition-shadow bg-light dark:bg-dark",
         onTop && "shadow-sm"
      )}>
         <div className="gradient-animation w-full h-1.5 bg-red-400"/>
         <nav className="custom-container py-4 flex items-center justify-between text-dark dark:text-light">
            <ul className="flex items-center justify-between gap-3 text-xs md:gap-6 md:text-base">
               {links.map(({ href, label }) => (
                  <li className="pb-2" key={`${href}-${label}`}>
                     <UnstyledLink
                        href={href}
                     >
                        {label}
                     </UnstyledLink>
                     {pathname === href  ? <div
                        className="h-[3px] gradient-animation-slow w-full shadow"
                     /> : <div className="h-[3px]" />}
                  </li>
               ))}
            </ul>
            {/* <ThemeButton /> */}
         </nav>
      </header>
   )
}