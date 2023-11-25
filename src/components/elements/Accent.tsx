import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"

export const Accent:FC<ComponentPropsWithoutRef<"span">> = ({
   children,
   className
}) => {

   return (
      <div className="bg-dark dark:bg-gradient-to-r from-accent-light to-accent-dark inline-block px-1 py-0.5">
         <span
            className={clsx(
               className,
               "transition-colors from-accent-light bg-gradient-to-r to-accent-dark bg-clip-text text-transparent dark:text-dark"
            )}
         >
            {children}
         </span>
      </div>
   )
}