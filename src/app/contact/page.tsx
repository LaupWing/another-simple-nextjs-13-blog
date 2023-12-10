"use client"
import { Button } from "@/components/buttons/Button"
import { Accent } from "@/components/elements/Accent"
import { FormEvent, useRef } from "react"

interface CustomElements extends HTMLFormControlsCollection {
   message: HTMLTextAreaElement
   email: HTMLInputElement
   name: HTMLInputElement
}

interface CustomForm extends HTMLFormElement {
   readonly elements: CustomElements;
}

const Contact = () => {
   const form_ref = useRef<HTMLFormElement>(null)

   const handleSubmit = async (e: FormEvent<CustomForm>) => {
      e.preventDefault()

      const res = await fetch("/api/contact", {
         method: "POST",
         body: JSON.stringify({
            email: e.currentTarget.elements.email.value,
            message: e.currentTarget.elements.message.value,
            name: e.currentTarget.elements.name.value,
         })
      })
      const data = await res.json()
      console.log(data)
   }

   return (
      <section className="custom-container max-w-lg min-h-screen py-12">
         <h1
            className="text-3xl md:text-5xl"
            data-fade="0"
         >
            <Accent>Contact</Accent>
         </h1>
         <p 
            className="text-gray-500"
            data-fade="1"
         >
            Unlock exciting possibilities! Interested in a project or tutoring? Reach out using the contact form and let's embark on this journey together!
         </p>
         <form
            className="mt-4 flex w-full flex-col items-start gap-4"
            ref={form_ref}
            onSubmit={handleSubmit}
         >
            <div 
               className="w-full"
               data-fade="2"
            >
               <input
                  type="text"
                  id="name"
                  required
                  placeholder="Name"
                  className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light"
               />
            </div>
            <div 
               className="w-full"
               data-fade="3"
            >
               <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light"
               />
            </div>
            <div className="w-full" data-fade="4">
               <textarea
                  required
                  id="message"
                  className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light resize-none"
                  placeholder="Message"
                  rows={10}
               ></textarea>
            </div>
            <div data-fade="5">
               <Button 
                  className="mr-auto" 
                  variant="gradient-animation"
               >
                  Submit
               </Button>
            </div>
         </form>
      </section>
   )
}
export default Contact