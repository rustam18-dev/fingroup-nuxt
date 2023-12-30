/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        mainB: '#168CE4',
        mainG: '#929292',
        groupHover: ['responsive', 'hover', 'focus', 'group-hover']
      }
    },
  },
  plugins: [],
}

