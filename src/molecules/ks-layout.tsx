'use client'

import { Toaster } from '@/atoms/shacdn/sonner'
import { ThemeProvider } from '@/atoms/shacdn/theme-provider'
import type { ReactNode } from 'react'

export function KsLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      disableTransitionOnChange={true}
      defaultTheme="system"
    >
      <div>
        {children}
        <Toaster />
      </div>
    </ThemeProvider>
  )
}

export default KsLayout
