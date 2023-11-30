import Image from "next/image"
import { CustomLink } from "./links"
import { CloudinaryImage } from "./images/index.client"
import { CustomCode } from "./sections/index.client"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { Pre, Split, SplitImage } from "./sections"
import { TechIcons } from "./TechIcons.client"
import { TweetCard } from "./cards"
import { GithubCard } from "./cards/index.client"


export const MDXComponents = {
   a: CustomLink,
   Image,
   Cloudinary: CloudinaryImage,
   code: CustomCode,
   pre: Pre,
   LiteYouTubeEmbed,
   Split,
   SplitImage,
   TechIcons,
   TweetCard,
   GithubCard
}