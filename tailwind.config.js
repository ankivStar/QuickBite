 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        'Basic' : ['Basis_Grotesque_Pro_Bold'],
        'desColor' : ['ProximaNova,arial,Helvetica Neue,sans-serif']
      },
      colors: {
      swiggyDes : 'var(--color-primary)'
    },
    },
  },
  plugins: [],
}

