/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0f0f0f',
          card: '#1a1a1a',
        },
        fg: {
          DEFAULT: '#f3f4f6',
          muted: '#9ca3af',
        },
        accent: {
          DEFAULT: '#10b981',
          hover: '#059669',
        },
        danger: {
          DEFAULT: '#ef4444',
        },
      },
      borderRadius: {
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
}