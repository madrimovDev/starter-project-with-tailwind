import React, { useState } from "react"
import { MenuOutlined } from "@ant-design/icons"
import ToggleButton from "../other/toggleButton"
import menuLists from "./menuLists"
import Navlink from "./navlink"
import useMediaQuery from '../../hooks/useMediaQuery'
import MobileMenu from "./mobileMenu"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return(
    <div className="relative md:h-20 h-14 w-full border-b border-brand-500/50 flex md:justify-center justify-between sm:px-10 px-5 items-center">
      <Link href="/">
      <a className="md:hidden">
        Atomic
      </a>
      </Link>
      <ul className="md:flex justify-center items-center gap-10 hidden">
        {
          menuLists.map((link, index) => {
            return (
              <li key={link.path+index} className="text-lg hover:text-brand-300 transition">
                <Navlink link={link} />
              </li>
            )
          })
        }  
      </ul>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
      <button onClick={toggleMenu} className="flex justify-center items-center md:hidden w-6 h-6 bg-slate-500/10 rounded-sm font-thin">
        <MenuOutlined />
      </button>  
      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2">
        <ToggleButton />  
      </div>  
    </div>
  )
}

export default Navbar
