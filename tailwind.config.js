module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        '0': 0,
        DEFAULT: 2,
        '1': 1,
      },
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
