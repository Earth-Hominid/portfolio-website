/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        abrilfatface: ['Abril Fatface', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        paytoneone: ['Paytone One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        rubikmaze: ['Rubik Maze', 'cursive'],
        tinos: ['Tinos', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
