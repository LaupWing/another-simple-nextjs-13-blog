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
      default: "bg-light dark:bg-dark text-gray-600 disabled:bg-gray-200 dark:text-gray-200 dark:disabled:bg-gray-700 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-accent shadow-sm",
      "gradient-animation": "bg-white py-[7px]"
   }

   const classNameComputed = clsx(
      "rounded font-bold scale-100 px-4 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 transition duration-100",
      variants[variant],
      className
   )

   return (
      variant === "gradient-animation" ? (
         <div className="gradient-animation-border">
            <button
               {...props}
               disabled={disabled}
               className={classNameComputed}
            >
               {children}
            </button>
         </div>) 
      : (
         <button
            {...props}
            disabled={disabled}
            className={classNameComputed}
         >
            {children}
         </button>
      )
   )
}