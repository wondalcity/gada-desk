import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0669F7',
          'blue-dark': '#0556d6',
          yellow: '#FFC72C',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        'soft-lg': '0 30px 60px -30px rgba(15, 23, 42, 0.25)',
        'pro': '0 25px 50px -30px rgba(6, 105, 247, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
