import '../src/globals.css'

import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { Inter as FontSans } from 'next/font/google'

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
]

const _fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
