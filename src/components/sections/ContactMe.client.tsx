"use client"
import { useRef } from "react"
import { Button } from "../buttons/Button"

export const ContactMe = () => {
   const form_ref = useRef<HTMLFormElement>(null)

   return (
      <form
         ref={form_ref}
         className="flex"
      >
         <div className="flex">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
         </div>
         <Button variant="gradient-animation">
            Submit
         </Button>
      </form>
   )
}