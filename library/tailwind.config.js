/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        'light-orange': '#fff2db',
        orange: '#ffa600',
        'red-orange': '#ff8531',
        purple: '#bc5090',
        'dark-purple': '#8a508f',
        'dark-blue': '#2c4875',
        'dark-green': '#003f5c',
        'font-color': '#00202e',
        'success-color': '#50BC7C',
        'alert-color': '#ff6361',
      },
      fontFamily: {
        serif: ['Oleo Script', 'serif'],
      },
    },
  },
  plugins: [],
};
