import type { ReactNode } from 'react'

export function KsLayout({ children }: { children: ReactNode }) {
  return <div className={'w-full'}>{children}</div>
}
