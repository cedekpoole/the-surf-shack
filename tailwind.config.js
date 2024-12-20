/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#388FC4",
          DEFAULT: "#2B6E97",
          dark: "#245B7D",
        },
        secondary: {
          light: "#F7D9C4",
          DEFAULT: "#F4BBAF",
          dark: "#EFAE9D",
        },
        accent: {
          light: "#F9F871",
          DEFAULT: "#F7F53D",
          dark: "#F5F22C",
        },
      },
      animation: {
        bubble: "bubble 4s ease-in infinite",
      },
      keyframes: {
        bubble: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100px)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
