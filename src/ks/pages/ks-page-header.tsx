'use client'
import type { ReactNode } from 'react'

export function KsPageHeader(props: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-row place-content-between items-center">
      {props.children}
    </div>
  )
}
