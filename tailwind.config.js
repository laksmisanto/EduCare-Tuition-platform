/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      primary: "#FF7F50",
      secondary: "#F2F5FC",
      white: "#FFFFFF",
      gray: "#686D76",
      black: "#2F3645",
      tertiary: "#F5F5F5",
      quaternary: "#EDEDED",
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};
