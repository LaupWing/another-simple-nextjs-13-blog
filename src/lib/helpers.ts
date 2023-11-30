import type { ContentType, PickFrontmatter } from "@/types/frontmatters"

interface OpenGraphType {
   siteName: string
   description: string
   templateTitle?: string
   logo?: string
   banner?: string
   isBlog?: boolean
}

export const openGraph = ({
   siteName,
   templateTitle,
   description,
   banner,
   logo = `${process.env.SITE_URL}/images/logo.png`,
   isBlog = false
}: OpenGraphType) : string => {
   const ogLogo = encodeURIComponent(logo)
   const ogSiteName = encodeURIComponent(siteName.trim())
   const ogTemplateTitle = templateTitle
      ? encodeURIComponent(templateTitle.trim())
      : undefined
   const ogDescription = encodeURIComponent(description.trim())

   if(isBlog) {
      const ogBanner = banner 
         ? encodeURIComponent(banner.trim())
         : undefined
      
      return `${process.env.SITE_URL}/api/og/blog?templateTitle=${ogTemplateTitle}&banner=${ogBanner}`
   }

   return `${process.env.SITE_URL}/api/og/gradient?siteName=${ogSiteName}&description=${ogDescription}&logo=${ogLogo}${ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""}`
}

export const getFromSessionStorage = (key: string) => {
   if (typeof sessionStorage !== "undefined"){
      return sessionStorage.getItem(key)
   }
   return null
}

export const attachContentMeta = async <T extends ContentType>(frontmatter: Array<PickFrontmatter<T>>) => {
   return await Promise.all(
      frontmatter.map(async (frontmatter) => {
         const res = await fetch(`${process.env.SITE_URL}/api/content/${frontmatter.slug}`)
         const data = await res.json()
         
         return {
            ...frontmatter,
            views: data.content_views,
            likes: data.content_likes
         }
      })
   )
}