import React, { useRef } from "react"
import Navbar from "../components/navbar/navbar"
import SocialLinks from "../components/social/socialLink"

type LayoutProps = {
  children: React.ReactNode
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen h-screen">
      <SocialLinks />
      <div className="w-full h-full flex flex-col overflow-hidden">
        <Navbar />
        <div className="h-full w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default layout
