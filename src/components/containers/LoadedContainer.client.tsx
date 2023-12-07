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
   const [prevState, setPrevState] = useState<null|string>(null)
   const pathname = usePathname()
   const [loaded, setLoaded] = useState(prevState === pathname)
   const router = useRouter()
   
   console.log(loaded)
   console.log(prevState)

   useEffect(() => {
      setPrevState(pathname)
      setLoaded(true)
      NProgress.done()
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