module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  presets: [
    require('./utils/tailwind-preset'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({}),
      width: {
        128: '32rem',
      },
      height: {
        128: '32rem',
      },
      fontFamily: {
        nom: ['HanNomMinh', 'regular'],
        ven: ['VEN', 'regular'],
        aileron: ['AileronHeavy','regular'],
        danhda: ['DanhDa','regular']
        
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#4865ab',
        primarycontrast: '#f76f61',
        secondary: '#e6d65a',
        tertiary: '#f76f61',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
};
