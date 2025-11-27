/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f9ff',
          100: '#e6f0ff',
          200: '#c4daff',
          300: '#9fc2ff',
          400: '#6397ff',
          500: '#316ef8',
          600: '#1f4fda',
          700: '#1b3eba',
          800: '#1b3595',
          900: '#192f78',
          950: '#0f1b46'
        }
      },
      boxShadow: {
        header: '0 10px 30px rgba(15, 27, 70, 0.35)'
      }
    }
  },
  plugins: []
};

