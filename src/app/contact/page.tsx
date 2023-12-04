import { Accent } from "@/components/elements/Accent"


const Contact = () => {
   return (
      <section className="custom-container min-h-screen py-12">
         <h1 
            className="text-3xl md:text-5xl"
            data-fade="0"
         >
            <Accent>Contact</Accent>
         </h1>
         <p className="text-gray-500">Unlock exciting possibilities! Interested in a project or tutoring? Reach out using the contact form and let's embark on this journey together!</p>
         <form className="mt-4 flex w-full max-w-lg flex-col">
            <input 
               type="email" 
               className="rounded-md text-black px-2 py-2 border-2 border-gray-400"
            />
            <textarea 
               className="w-full rounded-md text-black px-2 py-2 border-2 border-gray-400 mt-2"
               rows={10}
            ></textarea>
         </form>
      </section>
   )
}
export default Contact