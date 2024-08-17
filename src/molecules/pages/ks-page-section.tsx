'use client'
import type { ReactNode } from 'react'

export function KsPageSection(props: { children: ReactNode }) {
  return <div className="flex flex-col gap-8">{props.children}</div>
}
