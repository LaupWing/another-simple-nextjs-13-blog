import { FC } from "react"
import { UnstyledLink, UnstyledLinkProps } from "./UnstyledLink"
import { Button } from "../buttons"
import { ButtonVariant } from "../buttons/Button"

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
         variant={variant}
      >
         <UnstyledLink
            {...props}
         >
            {children}
         </UnstyledLink>
      </Button>  
   )
}