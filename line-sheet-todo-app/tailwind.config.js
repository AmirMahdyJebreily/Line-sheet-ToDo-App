/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/*.vue",
    "./src/components/**/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        'badget-bg-soft-black' : '#070707'
      },
      animation: {
        'ping-fast': 'ping 500ms ease-out infinite',
      }
    },
  },
  plugins: [],
}
