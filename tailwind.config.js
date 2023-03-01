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
    screens: {
      tablet: "768px",
      desktop: "1024px"
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      primary: {
        100: "#ebf8ff",
        300: "#90cdf4",
        500: "#4299e1",
        700: "#2b6cb0",
        900: "#2a4365"
      },
      secondary: {
        100: "#fffff0",
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
