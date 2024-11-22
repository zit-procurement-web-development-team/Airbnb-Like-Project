/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md768': '768px', // Define a custom breakpoint at 950px
        'lg769': '769px',
      },
    },
  },
  plugins: [],
}
