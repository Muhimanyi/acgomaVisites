/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme:
  {
    extend:
    {
      boxShadow:
      {
        'dl': 'gray 2px 2px 10px',
        'kl': 'gray 1px 1px 10px',
        'ml': 'black 2px 2px 10px',
        'fl': 'rgba(128, 128, 128, 0.774) 2px 2px 10px',
        'green': 'rgb(0, 100, 0, 0.5) 2px 2px 20px'
      },
      animation: {
        'tourn': 'back 3s linear infinite',
        'trn': 'back 1s linear ',
        'apparution': 'apparution 0.2s linear',
        'slide': 'slide 3s infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'fadeleft': 'fadeleft 1s ease-out forwards',
        'faderight': 'faderight 1s ease-out forwards',
        'fadeslideright': 'fadeslideright 1s ease-out forwards'
      },



      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadeslideright: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
        fadeleft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0px)', 'z-index': '100' },
        },
        faderight: {
          '0%': { opacity: '1', transform: 'translateX(0px)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)', display: 'none', 'z-index': '0' },
        },
        back: {
          '0%':
          {
            transform: 'rotate(0deg) scale(0%)',
          },
          '50%':
          {
            transform: 'rotate(180deg) scale(100%)',
          },
          '100%':
          {
            transform: 'rotate(360deg) scale(0%)',
          },
        },
        apparution:
        {
          '0%':
          {
            transform: 'scale(0%)'
          },
          '100%':
          {
            transform: 'scale(100%)'
          }
        },
        trn: {
          '0%': {
            transform: 'rotate(10deg)',
          }
        },
        slide:
        {
          '0%':
          {
            transform: 'translate-x:(0px)'
          },
          '100%':
          {
            transform: 'translate-x:(500px)'
          }
        }
      }
    },
    fontFamily:
    {
      'arial': 'arial',
      'verdana': 'Verdana, Geneva, Tahoma, sans-serif',
      'sans': 'sans-serif',
      'roboto': 'roboto',
      'italic': 'italic'
    },
    screens: {
      'dl': { 'max': '1430px' },

      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [

  ],
}






















//npx tailwindcss -i ./src/input.css -o ./src/public/assets/css/output.css --watch