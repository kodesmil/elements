'use client'
import { cn } from '@covision/elements/lib'
import type { ReactNode } from 'react'

export function KsPageSection(props: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-12 py-8', props.className)}>
      {props.children}
    </div>
  )
}
