import type { ComponentPropsWithoutRef, FC } from "react"
import clsx from "clsx"

type ButtonVariant = "default" | "gradient-animation"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
   is_loading?: boolean
   variant?: ButtonVariant
}

export const Button:FC<ButtonProps> = ({
   children,
   className,
   disabled: button_disabled,
   is_loading,
   variant = "default",
   ...props
}) => {
   const disabled = is_loading || button_disabled

   const variants: Record<ButtonVariant, string> = {
      default: "bg-white dark:bg-dark text-gray-600 disabled:bg-gray-200 dark:text-gray-200 dark:disabled:bg-gray-700",
      "gradient-animation": "bg-white"
   }

   return (
      <div className="gradient-animation-border overflow-hidden rounded">
         <button
            {...props}
            disabled={disabled}
            className={clsx(
               "rounded px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-accent scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 transition duration-100",
               variants[variant],
               className
            )}
         >
            {children}
         </button>
      </div>
   )
}