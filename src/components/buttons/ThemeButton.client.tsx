import { useState } from "react"
import { motion } from "framer-motion"

const spring = {
   type: "spring",
   stiffness: 700,
   damping: 30
}

export const ThemeButton = () => {
   const [isOn, setIsOn] = useState(false)

   const toggleSwitch = () => setIsOn(!isOn)
   
   return (
      <button  
         className={`flex p-1 w-16 rounded-full bg-gray-300 pointer ${isOn ? "justify-start" : "justify-end"}`}
         onClick={toggleSwitch}
      >
         <motion.div
            className="bg-white rounded-full w-7 h-7"
            layout
            transition={spring}
         />
      </button>
   )
}