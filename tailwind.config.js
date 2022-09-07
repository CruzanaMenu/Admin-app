module.exports = {
  content: [
    // './src/**/*.{html,jsx}',
    // './src/pages/**/*.{html,jsx}',
    // './src/components/**/*.{html,jsx}',
    // './src/layouts/**/*.{html,jsx}',
    // './public/index.html',
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
        hospitalgreen: '#ACD9B2'
      },
      fontSize: {
        sma: ['14px'],
        med: ['16px'],
        lag: ['18px']
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
