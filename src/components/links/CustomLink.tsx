import type { FC } from "react"
import { UnstyledLink, UnstyledLinkProps } from "./UnstyledLink.client"
import clsx from "clsx"

export const CustomLink:FC<UnstyledLinkProps> = ({
   children,
   className,
   ...props
}) => {
   return (
      <UnstyledLink
         {...props}
         className={clsx("animated-underline inline-flex items-center font-medium focus:outline-none focus-visible:ring focus-visible:ring-accent-dark dark:focus-visible:ring-accent-light border-b border-dotted border-dark dark:border-light hover:border-dark/0", className)}
      >
         <span className="dark:bg-gradient-to-tr dark:from-accent-light dark:to-accent-dark dark:bg-clip-text dark:text-transparent">
            {children}
         </span>
      </UnstyledLink>
   )
}