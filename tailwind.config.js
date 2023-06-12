/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['NeueHaasGroteskDisplay-Medium'],
        body: ['NeueHaasGroteskText-Medium'],
      },
    },
  },
  plugins: [],
};
