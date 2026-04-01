/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        'cinzel-deco': ['"Cinzel Decorative"', 'serif'],
        garamond: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c870',
          dim: '#7a6025',
        },
        bg: {
          DEFAULT: '#04020e',
          2: '#08051c',
        },
        crimson: '#8b0000',
        card: 'rgba(12,8,32,0.88)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #e8c870 0%, #c9a84c 45%, #e8a840 100%)',
      },
    },
  },
  plugins: [],
};
