import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#FFFFFF',
        'on-background': '#252F3D',
        action: '#59AE43',
        primary: '#2C7EF8',
        content: '#000000',
        info: '#4D5254',
        error: '#F82C2C',
        secondary: '#FFC000',
        tertiary: '#969696',
        label: '#37465A',
        light: '#EDF3FD',
        border: '#CFCFCF',
      },
      fontSize: {
        header1: '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
