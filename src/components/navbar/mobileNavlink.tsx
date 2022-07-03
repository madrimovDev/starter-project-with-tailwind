import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { MenuListsType } from "./menuLists"

const MobileNavlink = ({ link }: { link: MenuListsType }) => {
  const { asPath } = useRouter()
  return (
    <Link href={link.path}>
      <a className={asPath === link.path ? "inline-block w-full px-3 py-2 rounded-md bg-brand-400/50" : "inline-block w-full px-3 py-2 rounded-md hover:bg-brand-400/10"}>
        {link.name}
      </a>
    </Link>
  )
}

export default MobileNavlink