import { Accent } from "@/components/elements/Accent"
import { CloudinaryImage } from "@/components/images"
import { CustomLink } from "@/components/links/CustomLink"

const About = () => {
   return (
      <section className="layout min-h-screen py-20">
         <h2>About</h2>
         <h1 className="mt-1">
            <Accent>Laup Wing</Accent>
         </h1>
         <div className="mt-4">
            <CloudinaryImage 
               className="float-right ml-6 w-40 md:w-72"
               publicId="samples/bike"
               alt="Bike"
               width={1200}
               height={1695}
            />
            <article className="prose dark:prose-invert">
               <p>
                  Hello! I'm Clarence. I started learning web development in May
                  2020, which is the start of the pandemic. I have nothing much
                  to do so I decided to learn web development from a udemy
                  course, then started watching a bunch of{' '}
                  <CustomLink href='/blog/youtube-list'>
                    youtube videos
                  </CustomLink>{' '}
                  to explore more about web development especially frontend
                  development.
               </p>
               <p>
                  There are a lot of things and technologies to learn in
                  frontend development and I am motivated to learn as much as
                  possible. I enjoy learning something new and getting feedback
                  to make myself better and improve.
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