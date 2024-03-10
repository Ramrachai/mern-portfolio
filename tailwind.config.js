/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "primary": "#22242a", 
      "secondary": "#d33161", 
      "light": "#c4cfde", 
      "body" : "#878e99"
    }, 
    fontFamily: {
      "montserrat" : ["Montserrat", "sans-serif"], 
      "poppins" : ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
};
