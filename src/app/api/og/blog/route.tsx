import { ImageResponse } from "next/og"
import { CSSProperties } from "react"

const inter400 = fetch(
   new URL("@/assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const inter500 = fetch(
   new URL("@/assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const runtime = "edge"

export async function GET(request: Request) {
   const interRegular = await inter400
   const interMedium = await inter500

   const { searchParams } = new URL(request.url)

   const laup = `http://${request.headers.get("Host")}/images/laup.jpg`
   const templateTitle = searchParams.get("templateTitle")
   const banner = searchParams.get("banner")

   const query = {
      templateTitle: templateTitle ?? "Blog Title",
      banner
   }
   
   return new ImageResponse((
      <div
         style={{
            height: "100%",
            width: "100%",
            fontFamily: "Inter",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "4rem 3rem",
            backgroundColor: "#0e0e0e"
         }}
      >
         <div 
            style={{
               display: "flex",
               flexDirection: "row",
               gap: "1rem",
               height: "100%",
               width: "100%"
            }}
         >
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  height: "100%",
                  width: "0%",
                  flexGrow: 1
               }}
            >
               <h3
                  style={{
                     margin: 0
                  }}
                  tw="text-2xl font-normal text-gray-300"
               >
                  tech.laupwing.com
               </h3>
               <h1 tw="mt-0 text-4xl leading-tight font-normal">
                  <span
                     style={{
                        backgroundImage: "linear-gradient(90deg, #ffc000, #876117)",
                        backgroundClip: "text",
                        "-webkit-background-clip": "text",
                        color: "transparent",
                        padding: "0.5rem 0"
                     } as CSSProperties}
                  >
                     {query.templateTitle}
                  </span>
               </h1>

               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     gap: "1.4em",
                     alignItems: "center",
                     marginTop: "auto"
                  }}
               >
                  <img 
                     src={laup} 
                     tw="w-[80px] rounded-full"
                     alt="Photo of Laup"
                  />
                  <div
                     style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.1rem"
                     }}
                  >
                     <p 
                        style={{margin: 0}}
                        tw="font-medium text-[1.6rem] mt-0 text-white"
                     >
                        Laup Wing
                     </p>
                     <p 
                        style={{margin: 0}}
                        tw="text-xl mt-0 text-gray-300"
                     >
                        @laupwing
                     </p>
                  </div>
               </div>
            </div>
            {banner && (
               <div 
                  style={{
                     display: "flex"
                  }}
               >
                  <img 
                     src={banner} 
                     tw="h-[83vh] block"
                     alt="Banner" 
                  />
               </div>
            )}
         </div>
      </div>
   ),
      {
         width: 1200,
         height: 600,
         emoji: "twemoji",
         fonts: [
            {
               name: "Inter",
               data: interRegular,
               weight: 400
            },
            {
               name: "Inter",
               data: interMedium,
               weight: 500
            },
         ]
      }
   )
}