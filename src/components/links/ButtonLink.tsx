import { FC } from "react"
import { UnstyledLink, UnstyledLinkProps } from "./UnstyledLink"
import { Button } from "../buttons"

type ButtonVariant = "default" | "gold"

interface ButtonLinkProps extends UnstyledLinkProps {
   variant?: ButtonVariant
}

export const ButtonLink:FC<ButtonLinkProps> = ({
   children,
   className,
   variant = "default",
   ...props
}) => {
   return (
      <Button
         className={className}
      >
         <UnstyledLink
            {...props}
         >
            {children}
         </UnstyledLink>
      </Button>  
   )
}