import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { MenuListsType } from "./menuLists"

const Navlink = ({ link }: { link: MenuListsType }) => {
  const { asPath } = useRouter()
  return (
    <Link href={link.path}>
      <a className={asPath === link.path ? "text-brand-500" : "text-inherit"}>
        {link.name}
      </a>
    </Link>
  )
}

export default Navlink
