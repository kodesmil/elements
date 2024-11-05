'use client'

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import type { ReactNode } from 'react'

export function ThemeProvider(
  props: ThemeProviderProps & { children: ReactNode }
) {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>
}
