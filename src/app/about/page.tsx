import { TechIcons } from "@/components/TechIcons.client"
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
               public_id="techblog/laup_d5azzz"
               alt="Bike"
               width={1200}
               height={1200}
            />
            <article className="prose dark:prose-invert">
               <p>
                  Hello! I'm Loc Nguyen, and my passion for programming has been with me since my early years. Although I attended IT universities, the broad curriculum didn't quite align with my main interest – coding. Determined to pursue my passion, I took the self-taught route, starting with YouTube tutorials. Web development captured my heart, and I dove into building websites independently.
               </p>
               <p>
                  As coding became second nature, I decided to broaden my skills. I enrolled in a university program focused on web design called Communication Multimedia Design. Here, I not only delved deeper into coding but also recognized the significance of soft skills like communication, time management, and teamwork. I continue to refine these skills daily, understanding their crucial role in a developer's success.
               </p>
               <p>
                  With 5 years of experience as a web developer post-graduation, I've worked with various technologies. My expertise lies in Vue.js, React/Next.js, Node.js, and PHP/Laravel, primarily focusing on frontend frameworks. While my proficiency in backend frameworks like Node.js and especially Laravel spans 2 years, I've dedicated each day within that timeframe to backend programming. I'm also keen on expanding my knowledge in DevOps and cloud technologies.
               </p>
               <p>
                  This website serves as a platform for blogging and showcasing my projects. I believe that articulating my learnings enhances retention, and I'm eager to share my knowledge. Feel free to reach out, and I'll be delighted to assist you!
               </p>
               <h3 className="mt-12">Current Favorite Tech Stack</h3>
               <figure className="mt-2">
                  <TechIcons techs={[
                     "firebase",
                     "react",	
                     "nextjs",
                     "tailwindcss",
                     "typescript",
                     "javascript",
                     "nodejs",
                     "mongodb",
                  ]} />
               </figure>
            </article>
         </div>
      </section>
   )
}
export default About