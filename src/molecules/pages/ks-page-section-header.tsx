'use client'
import { cn } from '@covision/elements/lib'
import type { ReactNode } from 'react'

export function KsPageSectionHeader(props: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex w-full flex-row place-content-between items-center',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
