/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#19ba9b"
      }
      ,
      fontFamily: {
        lulo: ["Lulo Clean One", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"]
      }
    }
  },
  plugins: [],
}
