/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth : {
        container :"1140px",
        },

        colors: {
          'custom_orange': '#FF6231',
          'hash':'#888888'
        },
      
      fontFamily: {
      'dark': ['"Darker Grotesque"', "sans-serif"],
      'dot': ['"Raleway Dots"', "sans-serif"],
      'roboto': ['"Roboto"', "sans-serif"],
    },
    backgroundImage: {
      'gradient-custom': 'linear-gradient(to right, #FF6231, #FFA979)',
    },
    backgroundClip: {
      text: 'text',
    },
    textFillColor: {
      transparent: 'transparent',
    },

  },
  },
  plugins: [
    require('flowbite/plugin')
],
  function ({ addUtilities }) {
    addUtilities({
      '.bg-clip-text': {
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
      },
      '.text-transparent': {
        'color': 'transparent',
        '-webkit-text-fill-color': 'transparent',
      },
    });
  },
}

