module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#012955',
        secondary: '#009541',
        tertiary: '#F18D29',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
