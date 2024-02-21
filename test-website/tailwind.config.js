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
      colors: {
        primary: 'rgb(36,42,43)',
        secondary: 'rgb(128,128,128)',
        accent: {
          DEFAULT: 'rgb(125,194,202)',
          secondary: 'rgb(137,199,205)',
          tertiary: 'rgb(229,242,245)',
        },
        gray: 'rgb(232,240,241)',
        dark: '#1F2937',
      },
      fontFamily:{
        primary: 'Poppins'
      },
      fontWeight: {
        '100': 100,
        '200': 200,
        '300': 300,
        '400': 400,
        '500': 500,
        '600': 600,
        '700': 700,
        '800': 800,
        '900': 900,
      }
    },
  },
  plugins: [],
}
