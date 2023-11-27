"use client"
import { buildUrl, extractPublicId} from "cloudinary-build-url"
import clsx from "clsx"
import Image from "next/image"
import { ComponentPropsWithoutRef, FC } from "react"

interface CloudinaryImageProps extends ComponentPropsWithoutRef<"figure"> {
   publicId: string
   height: string | number
   width: string | number
   alt: string
   title?: string
   className?: string
   noStyle?: boolean
   aspect?: {
      width: number
      height: number
   }
   mdx?: boolean
}

export const CloudinaryImage:FC<CloudinaryImageProps> = ({
   publicId,
   height,
   width,
   alt,
   title,
   className,
   noStyle = false,
   mdx = false,
   style,
   aspect,
   ...props
}) => {
   const urlBlurred = buildUrl(publicId, {
      cloud: {
         cloudName: "laupwing",
      },
      transformations: {
         effect: {
            name: "blur:1000"
         },
         quality: 1,
         rawTransformations: aspect
            ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
            : undefined
      }
   })

   const url = buildUrl(publicId, {
      cloud: {
         cloudName: "laupwing"
      },
      transformations: {
         rawTransformation: aspect 
            ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
            : undefined
      }
   })

   const aspectRatio = aspect ? aspect.height / aspect.width : undefined

   return (
      <figure
         className={clsx(
            className,
            !noStyle && "overflow-hidden rounded shadow dark:shadow-none",
            (mdx && +width <= 800) && "mx-auto w-full"
         )}
         style={{
            ...((mdx && +width <= 800) ? { maxWidth: width } : {}),
            ...style
         }}
         {...props}
      >
         <div
            className="img-blur"
            style={{
               position: "relative",
               height: 0,
               paddingTop: aspectRatio
                  ? `${aspectRatio * 100}%`
                  : `${(+height / +width) * 100}%`
            }}
         >
            <style jsx>
               {`
                  .img-blur::before {
                     content: "";
                     position: absolute;
                     inset: 0;
                     filter: blur(20px);
                     z-index: 0;
                     background-image: url(${urlBlurred});
                     background-position: center center;
                     background-size: 100%;
                  }
               `}
            </style>
            <div className="absolute top-0 left-0">
               <Image 
                  width={+width}
                  height={+height}
                  style={{
                     margin: "auto"
                  }}
                  src={url}
                  alt={alt}
                  title={title || alt}
                  priority
               />
            </div>
         </div>
      </figure>
   )
}