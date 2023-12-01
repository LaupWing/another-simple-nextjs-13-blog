"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30
}

export const ThemeButton = () => {
   const [darkMode, setDarkMode] = useState(false)
   
   const toggleSwitch = () => {
      setDarkMode(!darkMode)
      localStorage.setItem("theme", darkMode ? "light" : "dark")
   }
   useEffect(() => {
      if(darkMode) {
         document.documentElement.classList.add("dark")
      } else {
         document.documentElement.classList.remove("dark")
      }
   }, [darkMode])
   
   useEffect(() => {
      if (localStorage.getItem("theme") === "dark") {
         setDarkMode(true)
      } else {
         setDarkMode(false)
      }
   }, [])
   
   return (
      <button  
         suppressHydrationWarning
         className={`flex p-1 w-16 rounded-full bg-gray-300 pointer ${darkMode ? "justify-start" : "justify-end"}`}
         onClick={toggleSwitch}
      >
         <motion.div
            className="rounded-full w-7 h-7 bg-white"
            layout
            transition={spring}
         />
      </button>
   )
}