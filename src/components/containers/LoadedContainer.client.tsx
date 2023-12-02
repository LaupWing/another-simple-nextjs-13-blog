"use client"
import type { 
   FC, 
   PropsWithChildren, 
   ComponentPropsWithoutRef 
} from "react"
import { useEffect, useState } from "react"
import * as NProgress from "nprogress"
import { usePathname, useRouter } from "next/navigation"

export const LoadedContainer:FC<PropsWithChildren & ComponentPropsWithoutRef<"div">> = ({ 
   children, 
   ...props 
}) => {
   const [loaded, setLoaded] = useState(false)
   const pathname = usePathname()
   const router = useRouter()
   
   useEffect(() => {
      setLoaded(true)
      NProgress.done()
      console.log("loaded")
   }, [pathname , router])

   return (
      <div
         className={loaded ? "fade-in-start" : ""}
         {...props}
      >
         {children}
      </div>
   )
}