/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prim: {
          100: "#FF6C00",
          200: "#E65B00",
          300: "#CC4A00",
          400: "#B33900",
          500: "#992800"
        },
        secon: {
          100: "#A0204C",
          200: "#8F1C44",
          300: "#7E183C",
          400: "#6D1434",
          500: "#5C102C"
        },
        bgprim: {
          100: "#23103A",
          200: "#1F0E34",
        },
        bgsecon: {
          100: "#282D4F",
          200: "#24294A",
        },
        bgdull: {
          100: "#2D2933",
          200: "#27242D",
        },
        newwhite: "#F0F0F0",
        newblack: "#101010",
      },
      transitionTimingFunction: {
        'exponential': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }
    },
  },
  plugins: [],
}