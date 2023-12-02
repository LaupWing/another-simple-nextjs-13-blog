import { CustomLink } from "./links/CustomLink"
import Image from "next/image"
import { CloudinaryImage } from "./images/index.client"
import { CustomCode } from "./sections/CustomCode.client"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { 
   Pre, 
   Split, 
   SplitImage 
} from "./sections"
import { TechIcons } from "./TechIcons.client"
import { TweetCard } from "./cards/TweetCard"
import { GithubCard } from "./cards/GithubCard.client"


export const MDXComponents = {
   a: CustomLink,
   Image,
   CloudinaryImage: CloudinaryImage,
   code: CustomCode,
   pre: Pre,
   LiteYouTubeEmbed,
   Split,
   SplitImage,
   TechIcons,
   TweetCard,
   GithubCard
}