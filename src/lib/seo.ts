import { default_meta } from "@/config"
import { openGraph } from "./helpers"
import { Metadata } from "next"

interface SeoProps extends Partial<typeof default_meta> { 
   date?: string
   template_title?: string
   is_blog?: boolean
   banner?: string
   canonical?: string
   as_path?: string
}

export default function(props: SeoProps){
   const meta = {
      ...default_meta,
      ...props,
   }
   
   const image = openGraph({
      description: meta.description,
      site_name: meta.siteName,
      template_title: meta.template_title,
      banner: meta.banner,
      is_blog: meta.is_blog
   })

   const full_url = meta.as_path ? `${process.env.SITE_URL}/${meta.as_path}` : process.env.SITE_URL

   return {
      title: {
         default: meta.title,
         template: `%s | ${meta.title}`
      },
      robots: meta.robots,
      description: meta.description,
      twitter: {
         card: "summary_large_image",
         site: "@laupwing",
         title: meta.title,
         description: meta.description,
         images: [image]
      },
      openGraph: {
         url: full_url,
         images: [
            {
               url: image,
               width: 1200,
               height: 600
            }
         ],
         type: meta.type,
         title: meta.title,
         siteName: meta.siteName,
         description: meta.description,
         ...(props.date ? {
            publishedTime: props.date,
            authors: ["Laup Wing"],
         } : {})
      },
      alternates:{
         canonical: meta.canonical ? meta.canonical : full_url
      },
      themeColor: "#ffffff",
   } as Metadata
}