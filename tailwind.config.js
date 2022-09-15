module.exports = {
  content: [
    "./public/index.html", "./src/**/*.{html,jsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        white: '#FFFFFF',
        black: '#000000',
        vlpink: '#C7C7C7',
        textinfd: '#F7F7F7',
        hospitalgreen: '#ACD9B2',
        ebano: '#C7B299',
        carmesi: '#C0392B',
        tinto: '#641e16',
        principal: '#2b2b2b',
        backfoot: '#44475B',
      },
      fontSize: {
        xsm: ['10px'],
        sma: ['14px'],
        med: ['16px'],
        lag: ['18px']
      },
      textColor:{
        "primary": "#C0392B",
        "secondary": "#641E16",
        "terth": "#C7B299",
      },
      screens: {
        'movil': '640px'
      },
      textShadow: {
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
    },
  },
  variants: {
    width:["responsive", "hover", "focus"],
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
  ],
}
