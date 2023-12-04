"use client"
import { useRef } from "react"
import { Button } from "../buttons/Button"

export const ContactMe = () => {
   const form_ref = useRef<HTMLFormElement>(null)

   return (
      <form
         ref={form_ref}
         className="flex custom-container items-end gap-2"
      >
         <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input 
               className="py-2 px-2 rounded text-black bg-gray-100 border-2 border-gray-300"
               type="email" 
               name="email" 
               id="email" 
            />
         </div>
         <Button variant="gradient-animation">
            Submit
         </Button>
      </form>
   )
}