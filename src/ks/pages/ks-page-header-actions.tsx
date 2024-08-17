'use client'
import type { ReactNode } from 'react'

export function KsPageHeaderActions(props: { children: ReactNode }) {
  return <div className="flex flex-row gap-3">{props.children}</div>
}
