/** @type {import('tailwindcss').Config} */
import { slate, amber, violet, green, emerald } from 'tailwindcss/colors'
export const darkMode = 'class'
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
  colors: {
    gray: slate,
    yellow: amber,
    violet,
    green,
    emerald,
  },
}
export const variants = {
  extend: {},
}
export const plugins = []
