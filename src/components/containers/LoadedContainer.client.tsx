"use client"
import type { FC, PropsWithChildren } from "react"
import { useEffect, useState } from "react"

export const LoadedContainer:FC<PropsWithChildren> = ({ children }) => {
   const [loaded, setLoaded] = useState(false)

   useEffect(() => {
      setLoaded(true)
   }, [])

   return (
      <div
         className={loaded ? "fade-in-start" : ""}
      >
         {children}
      </div>
   )
}