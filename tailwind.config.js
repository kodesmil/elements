const { fontFamily } = require('tailwindcss/defaultTheme')
const { join } = require('node:path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [join(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontSize: {
        sm: '0.9rem',
        base: '1.2rem',
        xl: '1.4rem',
        '2xl': '1.6rem',
        '3xl': '1.8rem',
        '4xl': '2.2rem',
        '5xl': '3rem',
      },
      fontFamily: {
        sans: ['"Inter var", sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        popover: 'hsl(var(--popover) / <alpha-value>)',
        'popover-foreground': 'hsl(var(--popover-foreground) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-foreground':
          'hsl(var(--secondary-foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        'destructive-foreground':
          'hsl(var(--destructive-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
