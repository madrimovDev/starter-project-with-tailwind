/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        dark: "#1F282D",
        light: "#eeeeee",
        brand: {
          900: "#383A61",
          800: "#475478",
          700: "#57718F",
          600: "#6791A5",
          500: "#77B3BB",
          400: "#8FCCC6",
          300: "#A8DBCC",
          200: "#C4E9D6",
          100: "#E0F5E6",
        },
      },
    },
  },
  plugins: [],
}
