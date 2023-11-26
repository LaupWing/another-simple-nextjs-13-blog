import type { ComponentPropsWithoutRef, FC } from "react"
import clsx from "clsx"

export const Accent:FC<ComponentPropsWithoutRef<"span">> = ({
   children,
   className
}) => {

   return (
      <div className="gradient-animation-slow inline-block px-1 py-0.5">
         <span
            className={clsx(
               className,
               "transition-colors dark:gradient-animation-slow dark:bg-clip-text dark:text-transparent"
            )}
         >
            {children}
         </span>
      </div>
   )
}