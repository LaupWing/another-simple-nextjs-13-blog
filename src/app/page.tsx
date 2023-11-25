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
      <section className="flex flex-col items-center justify-center min-h-screen">
         <div className="custom-container">
            <h2 className="text-2xl md:text-4xl 2xl:text-5xl">
               Hello!
            </h2>
         </div>
      </section>
   )
}