const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Sets Raleway as the primary sans-serif font
      },
      colors: {
        brand: {
          primary: "#024F42",
          secondary: "#80B157",
          text: "#1A202C",
          bg: "#F7FCF8",
          success: "#38A169",
          warning: "#D69E2E",
        },
      },
      text: {
        light: "#FFFFFF",
        DEFAULT: "#1A202C",
        dark: "#333333",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
