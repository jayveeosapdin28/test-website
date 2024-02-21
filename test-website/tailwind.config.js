/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      color: {
        primary: 'rgb(36,42,43)',
        secondary: 'rgb(128,128,128)',
        accent: {
          DEFAULT: 'rgb(125,194,202)',
          secondary: 'rgb(122,189,195)',
          tertiary: 'rgb(229,242,245)',
        },
        grey: 'rgb(232,240,241)',
      },
      fontFamily:{
        primary: 'Poppins'
      }
    },
  },
  plugins: [],
}

