import { useRef } from "react"


export const ContactMe = () => {
   const form_ref = useRef<HTMLFormElement>(null)

   return (
      <form
         ref={form_ref}
      >
         <div className="flex">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
         </div>
         
      </form>
   )
}