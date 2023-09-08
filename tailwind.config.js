/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#000000",
        "color-primary-dark":"#010417",
        "color-primary-light": "#020726",
        "color-gray": "#333",
        "color-secondary":"#ff7d3b",
        "color-white":"#fff",
        "color-blob":"#A427DF",
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'px',
        md:'50px'
      }
    }
  },
  plugins: [],
}

