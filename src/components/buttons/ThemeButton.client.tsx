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
   console.log(isOn)
   return (
      <div
         className={`flex p-1.5 w-20 rounded-full bg-black/30 pointer ${isOn ? "items-start" : "items-end"}`}
         onClick={toggleSwitch}
      >
         <motion.div
            className="bg-white rounded-full w-8 h-8"
            layout
            transition={spring}
         />
      </div>
   )
}



// .switch {
//    width: 160px;
//    height: 100px;
//    background-color: rgba(255, 255, 255, 0.4);
//    display: flex;
//    justify-content: flex-start;
//    border-radius: 50px;
//    padding: 10px;
//    cursor: pointer;
//  }

//  .switch[data-isOn="true"] {
//    justify-content: flex-end;
//  }

//  .handle {
//    width: 80px;
//    height: 80px;
//    background-color: white;
//    border-radius: 40px;
//  }
 