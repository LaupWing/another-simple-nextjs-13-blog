"use client"
import { useSelectedLayoutSegment } from "next/navigation"
import { FC, useEffect, useState } from "react"
import clsx from "clsx"
import { UnstyledLink } from "./links/UnstyledLink.client"
import { ThemeButton } from "./buttons/ThemeButton.client"

interface HeaderProps {
   large?: boolean
}
export const Header:FC<HeaderProps> = () => {
   const [onTop, setOnTop] = useState<boolean>(false)
   const activeSegment = useSelectedLayoutSegment()
   
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
         "sticky top-0 flex flex-col z-50 h-nav transition-shadow bg-light dark:bg-dark",
         onTop && "shadow-sm"
      )}>
         <div className="gradient-animation w-full h-1.5 bg-red-400"/>
         <nav className="custom-container flex-1 flex items-center justify-between text-dark dark:text-light">
            <ul className="flex items-center justify-between gap-3 text-xs md:gap-6 md:text-base">
               {links.map(({ href, label, segement }) => (
                  <li className="pb-2" key={`${href}-${label}`}>
                     <UnstyledLink
                        href={href}
                     >
                        {label}
                     </UnstyledLink>
                     {activeSegment === segement  
                        ? <div className="h-[3px] gradient-animation-slow w-full shadow" /> 
                        : <div className="h-[3px]" />}
                  </li>
               ))}
            </ul>
            <ThemeButton />
         </nav>
      </header>
   )
}