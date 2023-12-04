"use client"
import { FormEvent, useRef } from "react"
import { Button } from "../buttons/Button"

export const ContactMe = () => {
   const form_ref = useRef<HTMLFormElement>(null)
   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
   }

   return (
      <form
         ref={form_ref}
         onSubmit={handleSubmit}
         className="flex flex-col custom-container gap-4"
      >
         <div className="flex flex-col">
            <h2 className="text-sm uppercase text-gray-800">Subscribe</h2>
            <p className="text-gray-500">Subscribe to my newsletter to get regular content not published on my site.</p>
         </div>
         <div className="flex items-end gap-2">
            <div className="flex gap-1 flex-col w-full max-w-[300px]">
               <label 
                  htmlFor="email"
                  className="uppercase tracking-wider text-sm font-bold text-gray-600 dark:text-gray-400"
               >
                  Email
               </label>
               <input 
                  className="py-2 px-2 w-full rounded text-black bg-gray-100 border-2 border-gray-300"
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Enter your email"
               />
            </div>
            <Button variant="gradient-animation">
               Submit
            </Button>
         </div>
      </form>
   )
}