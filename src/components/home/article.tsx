import gsap, { SteppedEase } from "gsap"
import TextPlugin from "gsap/dist/TextPlugin"
import React, { useEffect, useRef } from "react"
import Service from "./service"

const Article = () => {
  
  const text = useRef(null)
  const btn = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(TextPlugin)
    }
    gsap.to(text.current, {
      text: {
        value:
          "distinctio nostrum dicta aperiam ad omnis sit perferendis est voluptate. Quis nam voluptatibus veritatis iusto quasi veniam quibusdam",
        type: "diff",
      },
      duration: 10,
      delay: 0,
      ease: SteppedEase.config(200)
    })

    gsap.to(btn.current,
    {
      opacity: 1,
      duration: 2, 
      delay: 10
    })
  }, [])

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="text-center lg:w-1/2 mt-[30vh]">
        <h2  className="uppercase text-brand-500 mb-2">Development Team</h2>
        <h1 className="text-3xl md:text-4xl tracking-wide">
          Deepcode Software
        </h1>
        <p ref={text} className="font-mono text-base tracking-wide mt-4"></p>
        <button ref={btn} className="py-2 px-8 mt-4 opacity-0 bg-brand-500">Contact Us</button>
      </div>
    </div>
  )
}

export default Article
