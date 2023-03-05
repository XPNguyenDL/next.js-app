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
      'top': '0 35px 35px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      black: "#0a0a0a",
      purple: "#7a5fd5",
      "purple-light": "#8071b3",
      "gray-dark": "rgba(0,0,0,0.8)",
      gray: "rgb(227,225,219)",
      "gray-light": "rgba(0,0,0,0.6)",
      "white-opacity": "rgba(255,255,255,0.95)",
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
  },
  plugins: []
};
