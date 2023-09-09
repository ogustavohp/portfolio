import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bluebutton: {
          50: '#e6faff',
          100: '#b0f1ff',
          200: '#8aeaff',
          300: '#54e0ff',
          400: '#33daff',
          500: '#00d1ff',
          600: '#00bee8',
          700: '#0094b5',
          800: '#00738c',
          900: '#00586b',
        },
        primary: {
          50: '#eafbf9',
          100: '#bef2eb',
          200: '#9eebe2',
          300: '#72e2d4',
          400: '#57ddcc',
          500: '#2dd4bf',
          600: '#29c1ae',
          700: '#209788',
          800: '#197569',
          900: '#135950',
        },
        secondary: {
          50: '#e7fefe',
          100: '#b5fdfd',
          200: '#92fcfc',
          300: '#60fbfb',
          400: '#41fafa',
          500: '#11f9f9',
          600: '#0fe3e3',
          700: '#0cb1b1',
          800: '#098989',
          900: '#076969',
        },
        bgcolor: {
          50: '#eaebed',
          100: '#bdc0c7',
          200: '#9da1ac',
          300: '#707686',
          400: '#545c6f',
          500: '#29334b',
          600: '#252e44',
          700: '#1d2435',
          800: '#171c29',
          900: '#111520',
        },
        iconcolor: {
          50: '#eaedf2',
          100: '#bfc6d6',
          200: '#a0aac3',
          300: '#7584a7',
          400: '#5a6c96',
          500: '#31477c',
          600: '#2d4171',
          700: '#233258',
          800: '#1b2744',
          900: '#151e34',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
