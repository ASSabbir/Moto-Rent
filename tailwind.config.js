import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#EC3323'
      },
      fontFamily:{
        'funnel':'"Funnel Sans", serif',
        'epilogue':'"Epilogue", serif',
        'inconsalata':'"Inconsolata", serif',
        'sora':'"Sora", serif'
      }
    },
  },
  plugins: [daisyui],
}

