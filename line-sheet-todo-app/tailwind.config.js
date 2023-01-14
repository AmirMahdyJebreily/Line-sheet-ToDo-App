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
        'badget-bg-soft-black': '#070707',
        'main':'#262628'
      },
      boxShadow: {
        'deactive-tab-sh': 'rgba(0, 0, 0, 0.30) 0px -40px 36px -28px inset',
        'active-tab-sh': 'rgba(0, 0, 0, 0.40) 0px -40px 36px -28px inset'
      },
      animation: {
        'ping-fast': 'ping 500ms ease-out infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
