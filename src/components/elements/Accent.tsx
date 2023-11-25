import type { ComponentPropsWithoutRef, FC } from "react"
import clsx from "clsx"

export const Accent:FC<ComponentPropsWithoutRef<"span">> = ({
   children,
   className
}) => {

   return (
      <div className="bg-dark dark:bg-gradient-to-r from-accent-light to-accent-dark inline-block px-1 py-0.5">
         <span
            className={clsx(
               className,
               "transition-colors gradient-animation-slow bg-clip-text text-transparent dark:text-dark"
            )}
         >
            {children}
         </span>
      </div>
   )
}