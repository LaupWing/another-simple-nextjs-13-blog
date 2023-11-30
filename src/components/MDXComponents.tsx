import Image from "next/image"
import { CustomLink } from "./links"
import { CloudinaryImage } from "./images/index.client"
import { CustomCode } from "./sections/index.client"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { Pre, Split } from "./sections"


export const MDXComponents = {
   a: CustomLink,
   Image,
   Cloudinary: CloudinaryImage,
   code: CustomCode,
   pre: Pre,
   LiteYouTubeEmbed,
   split: Split,
   
}