import { Accent } from "@/components/elements/Accent"
import Image from 'next/image'

export default function Home() {
   return (
      <main>
         <HomeIntro />
      </main>
   )
}


const HomeIntro = () => {

   return (
      <section className="flex flex-col items-center justify-center h-screen-no-nav">
         <div className="custom-container">
            <h2 className="text-2xl font-bold md:text-4xl 2xl:text-5xl">
               Hello!
            </h2>
            <h1 className="mt-1 font-bold text-3xl md:text-5xl 2xl:text-6xl">
               My name is <Accent>Loc Nguyen</Accent>
            </h1>
            <p className="mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl">
               I possess a strong enthusiasm for both programming and fitness, finding fulfillment in assisting individuals either at the gym or in the realm of coding.
            </p>
         </div>
      </section>
   )
}