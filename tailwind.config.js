/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    },
    colors: {
      black: "#0a0a0a",
      purple: "#7a5fd5",
      "purple-light": "#8071b3",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "rgba(0,0,0,0.6)",
      primary: {
        100: "#ebf8ff",
        300: "#90cdf4",
        500: "#4299e1",
        700: "#2b6cb0",
        900: "#2a4365"
      },
      secondary: {
        100: "#ffffff",
        300: "#faf089",
        500: "#ecc94b",
        700: "#b7791f",
        900: "#744210"
      }
    },
    animation: {
      "slide-in": "slide-in 0.5s ease-in-out",
      "slide-out": "slide-out 0.5s ease-in-out",
      "fade-in": "fade-in 0.5s ease-in-out",
      "fade-out": "fade-out 0.5s ease-in-out"
    }
  },
  plugins: []
};
