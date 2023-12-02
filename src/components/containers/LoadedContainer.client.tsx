"use client"
import type { 
   FC, 
   PropsWithChildren, 
   ComponentPropsWithoutRef 
} from "react"
import { useEffect, useState } from "react"
import * as NProgress from "nprogress"

export const LoadedContainer:FC<PropsWithChildren & ComponentPropsWithoutRef<"div">> = ({ 
   children, 
   ...props 
}) => {
   const [loaded, setLoaded] = useState(false)
   
   useEffect(() => {
      setLoaded(true)
      NProgress.done()
   }, [])

   return (
      <div
         className={loaded ? "fade-in-start" : ""}
         {...props}
      >
         {children}
      </div>
   )
}