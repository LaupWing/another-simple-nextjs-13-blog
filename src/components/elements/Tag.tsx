import type { ComponentPropsWithoutRef, FC } from "react"
import clsx from "clsx"

interface TagProps extends ComponentPropsWithoutRef<"button"> {}

export const Tag:FC<TagProps> = ({
   children,
   className,
   ...props
}) => {
   return (
      <button
         className={clsx(
            className,
            "inline-block rounded-md px-1.5 py-0.5 font-medium transition-colors bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500 focus:outline-none focus-visible:ring-accent-light focus-visible:ring disabled:cursor-not-allowed"
         )}
         {...props}
      >
         {children}
      </button>
   )
}