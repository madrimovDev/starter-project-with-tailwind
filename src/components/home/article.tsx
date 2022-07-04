import gsap, { SteppedEase } from "gsap"
import TextPlugin from "gsap/dist/TextPlugin"
import React, { useEffect, useRef } from "react"
import Service from "./service"

const Article = () => {
  const subtitle = useRef(null)
  const title = useRef(null)
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
      duration: 5,
      delay: 2,
      ease: SteppedEase.config(200),
    })

    gsap.to(btn.current, {
      opacity: 1,
      duration: 2,
      delay: 7,
    })

    gsap.fromTo(
      subtitle.current,
      {
        opacity: 0,
        y: -10,
        scale: 0.9
      },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5
      }
    )
    gsap.fromTo(
      title.current,
      {
        y: -10,
        opacity: 0,
      },
      {y:0,
        opacity: 1,
        duration: 1,
        delay: 1.5
      }
    )
  }, [])

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="text-center lg:w-1/2 mt-[20vh] md:mt-[30vh]">
        <h2 ref={subtitle} className="uppercase text-brand-500 mb-2">
          Development Team
        </h2>
        <h1 ref={title} className="text-3xl md:text-4xl tracking-wide">
          Deepcode Software
        </h1>
        <p ref={text} className="font-mono text-base tracking-wide mt-4"></p>
        <button ref={btn} className="py-2 px-8 mt-4 opacity-0 bg-brand-500">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Article
