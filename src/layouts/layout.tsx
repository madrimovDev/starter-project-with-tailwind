import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

const layout = ({ children }: LayoutProps) => {
  return <>{children}</>
}

export default layout