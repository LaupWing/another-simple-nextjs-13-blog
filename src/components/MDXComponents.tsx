import Image from "next/image"
import { CustomLink } from "./links"
import { CloudinaryImage } from "./images/index.client"
import { CustomCode } from "./sections/index.client"


export const MDXComponents = {
   a: CustomLink,
   Image,
   Cloudinary: CloudinaryImage,
   code: CustomCode
}