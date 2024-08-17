'use client'

import { Toaster } from '@/ui/sonner'
import { ThemeProvider } from '@/ui/theme-provider'
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
