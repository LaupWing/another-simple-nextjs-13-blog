import { Accent } from "@/components/elements/Accent"
import { CloudinaryImage } from "@/components/images/CloudinaryImage.client"
import { CustomLink } from "@/components/links/CustomLink"

const About = () => {
   return (
      <section className="custom-container min-h-screen py-20">
         <h2 className="dark:text-white">About</h2>
         <h1 className="mt-1">
            <Accent>Loc Nguyen</Accent>
         </h1>
         <div className="mt-4">
            <CloudinaryImage
               className="float-right ml-6 w-40 md:w-72"
               public_id="samples/bike"
               alt="Bike"
               width={1200}
               height={1695}
            />
            <article className="prose dark:prose-invert">
               <p>
                  Hello! I'm Loc Nguyen. Ever since I was young I have been interested in programming. I went to IT universities and tried it out, but unfortuanetly the education involved a lot of topics which not peak my interests, which is the coding part of it. Therefore made the choice to learn coding by myself. It started with watching a lot of videos on Youtube. Quickly I fell in love with web development and began to build websites on my own.
               </p>
               <p>
                  I discovered that the coding part was kinda getting easy. So I started a new university revolving around web design called communciation multimedia design to learn more about the other parts of web development.I also learned about the importance of soft skills, such as communication, time management, and teamwork. I believe that these skills are very important for a developer to have, and I am still learning and improving them every day.
               </p>
               <p>
                  After finising my study I have been working as a web developer for 5 years now. I have
                  worked with many different technologies, but I am most
                  
                  comfortable with React, Next.js, and Node.js. I am also
                  interested in learning more about DevOps and cloud
                  technologies.
               </p>
               <p>
                  In this website I will be writing some blogs and showcase my
                  projects. I believe that writing what I have learned is the
                  best way to remember things, and I can share my knowledge
                  along the way. So do contact me and I will be very happy to
                  help!
               </p>
               <h3 className="mt-12">Current Favorite Tech Stack</h3>
               <figure className="mt-2">
                  {/* <TechStack /> */}
               </figure>
            </article>
         </div>
      </section>
   )
}
export default About