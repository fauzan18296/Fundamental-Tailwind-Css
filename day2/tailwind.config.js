/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
   darkMode: 'class',
      theme: {
        extend: {
         spacing:{
          13:'3.25rem'
         },
         fontFamily: {
          inter: ['inter'],
         },
         colors: {
          wpu: '#bada55',
          kopi: '#c0ffee',
         },
         animation: {
          'spin-slow': 'spin 3s linear infinite',
          'wiggle': 'wiggle .5s ease-in-out infinite'
         },
         keyframes: {
          wiggle:{
            '0, 100%': {
              transform: 'rotate(-3deg)'},
              '50%': { transform: 'rotate(3deg)' }
          }
         }
        }
      },
  plugins: [],
}

