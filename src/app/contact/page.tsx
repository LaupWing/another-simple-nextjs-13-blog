import { Button } from "@/components/buttons/Button"
import { Accent } from "@/components/elements/Accent"


const Contact = () => {
   return (
      <section className="custom-container max-w-lg min-h-screen py-12">
         <h1 
            className="text-3xl md:text-5xl"
            data-fade="0"
         >
            <Accent>Contact</Accent>
         </h1>
         <p className="text-gray-500">Unlock exciting possibilities! Interested in a project or tutoring? Reach out using the contact form and let's embark on this journey together!</p>
         <form className="mt-4 flex w-full flex-col items-start gap-4">
            <input 
               type="email" 
               placeholder="Email"
               className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light"
            />
            <textarea 
               className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light resize-none"
               placeholder="Message"
               rows={10}
            ></textarea>
            <Button className="mr-auto" variant="gradient-animation">
               Submit
            </Button>
         </form>
      </section>
   )
}
export default Contact