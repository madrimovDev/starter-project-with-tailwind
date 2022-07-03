import React, { useEffect, useRef, useState } from "react"
import ToggleButton from "../other/toggleButton"
import menuLists from "./menuLists"
import Navlink from "./navlink"

const Navbar = () => {
  return(
    <div className="relative h-20 w-full border-b border-brand-500/50 flex justify-center items-center">
      <ul className="flex justify-center items-center gap-10">
        {
          menuLists.map((link, index) => {
            return (
              <li className="text-lg hover:text-brand-300 transition">
                <Navlink link={link} />
              </li>
            )
          })
        }  
      </ul>    
      <div className="absolute right-10 top-1/2 -translate-y-1/2">
        <ToggleButton />  
      </div>  
    </div>
  )
}

export default Navbar
