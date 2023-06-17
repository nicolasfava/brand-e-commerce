/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#F5BEC1',
        purple: '#4D3A4D',
        blue: '#C0B5DF',
        dimPurple: "rgba(78, 58, 77, 0.7)",
        dimWhite: "rgba(255, 255, 255, 0.7)"
      },
      font: {
        poppins: 'Poppins, sans-serif'
      },
      fontSize: {
        xl: '64px',
        md: '36px',
        sm: '24px',
        s: '20px',
        xs: '16px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screen: {
        xxs: '320px',
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        xxl: '2000px',
      }
    },
  },
  plugins: [],
}
