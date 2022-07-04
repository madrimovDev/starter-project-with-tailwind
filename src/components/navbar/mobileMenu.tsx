import { CloseOutlined } from "@ant-design/icons"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import ToggleButton from "../other/toggleButton"
import menuLists from "./menuLists"
import MobileNavlink from "./mobileNavlink"

type MobileMenuPropsType = {
  toggleMenu: () => void
  isOpen: boolean
}

const MobileMenu = ({ toggleMenu, isOpen }: MobileMenuPropsType) => {
  return (
    <div
      className={`z-50 p-4 absolute max-w-[270px] w-full h-screen top-0 dark:bg-brand-900 bg-slate-100 shadow-xl duration-300 ${
        isOpen ? "right-0" : "-right-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <ToggleButton />
        <button
          onClick={toggleMenu}
          className="aspect-square w-6 flex justify-center items-center"
        >
          <CloseOutlined />
        </button>
      </div>

      <ul className="flex flex-col gap-2 mt-4">
        {menuLists.map((link, index) => {
          return (
            <li key={link.path + index}>
              <MobileNavlink link={link} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileMenu
