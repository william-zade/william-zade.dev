import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#DC143C',
        'muted-teal': '#4FB9A7',
        navy: '#001F3F',
        cream: '#FFFDD0',
      },
    },
  },
  plugins: [],
};

export default config;
