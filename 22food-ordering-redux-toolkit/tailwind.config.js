/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
    },
    fontFamily: {
      sans: 'Roboto mono, monospace',
    },
  },
  plugins: [],
};
