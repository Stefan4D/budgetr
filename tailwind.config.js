/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Nunito', 'sans-serif'],
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
