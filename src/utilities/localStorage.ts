export const getItemFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }
  return null
}

export const setItemToStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}
