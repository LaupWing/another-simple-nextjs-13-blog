import { useRef } from "react"


export const ContactMe = () => {
   const form_ref = useRef<HTMLFormElement>(null)

   return (
      <form
         ref={form_ref}
      >
         
      </form>
   )
}