import React from "react"
import socialLists from "./socialLists"

const SocialLinks = () => {
  return (
    <div
      className="min-w-[80px]
        border-r 
        border-brand-400/50
        flex
        flex-col
        items-center
        justify-center
        gap-8
      "
    >
      {
        socialLists.map((link, index) => {
          return(
            <a key={index} className="text-xl dark:text-white/50 text-dark/50 hover:text-brand-500" href={link.href}>
              <link.icon/>
            </a>
          )
        })
      }
    </div>
  )
}

export default SocialLinks
