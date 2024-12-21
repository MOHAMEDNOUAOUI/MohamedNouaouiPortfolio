/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyCustomFont', 'sans-serif'],
        Roboto: ['Roboto' , 'sans-seris'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        itembgcolor: "#0E1D14",
        itemcolor: "#31E27C"
      },
    },
  },
  plugins: [],
};
