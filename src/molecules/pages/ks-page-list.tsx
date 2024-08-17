'use client'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export function KsPageList(props: { children: ReactNode; className?: string }) {
  return (
    <ul className={clsx('flex flex-row gap-4', props.className)}>
      {props.children}
    </ul>
  )
}
