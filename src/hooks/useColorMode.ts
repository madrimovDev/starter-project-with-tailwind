import { useEffect, useState } from "react"
import { getItemFromStorage, setItemToStorage } from "../utilities/localStorage"

type ColorMode = "dark" | "light"

const useColorMode = () => {
  const colorMode = (getItemFromStorage("color-mode") as ColorMode) || "light"
  const [mode, setMode] = useState<ColorMode>("light")

  useEffect(() => setMode((colorMode as ColorMode) || "light"), [])
  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode)
  }, [mode])
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      setItemToStorage("color-mode", "light")
    } else {
      setMode("dark")
      setItemToStorage("color-mode", "dark")
    }
  }

  const darkMode = () => {
    setMode("dark")
  }

  const lightMode = () => {
    setMode("light")
  }

  return {
    mode,
    toggleMode,
    darkMode,
    lightMode,
  }
}

export default useColorMode
