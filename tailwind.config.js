/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],

      animation: {
        animatepulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
    },
    fontFamily: {
      lobstertwo: ['Lobster Two', 'cursive'],
      teko: ['Teko', 'sans-serif'],
      dancing: ['Dancing Script', 'cursive'],
     noto: ["Noto Sans JP", "sans-serif"],
     josephin: ["Josefin Sans", "sans-serif"],
     lobster: ["Lobster", "cursive"],
     eb: ["EB Garamond", "serif"],
     el: ["El Messiri", "sans-serif"],
     ubuntu: ["Ubuntu Condensed", "sans-serif"],
     yeseva: ["Yeseva One", "cursive"],
     Roboto: ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}
