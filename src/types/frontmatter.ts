import { ReadTimeResults } from "reading-time"

export type ContentType = "blog" | "library" | "projects"

export interface ProjectFrontmatter {
   slug: string
   title: string
   publishedAt: string
   lastUpdated?: string
   description: string
   category?: string
   techs: string
   wordCount: number;
   readingTime: ReadTimeResults;
   banner: string
   link?: string
   github?: string
}

export type Frontmatter = 
   | ProjectFrontmatter
   | BlogFrontmatter
   | LibraryFrontmatter