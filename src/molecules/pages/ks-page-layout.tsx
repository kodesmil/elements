import { cn } from '@covision/elements/lib'
import type { ReactNode } from 'react'

export function KsPageLayout(props: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn('flex w-full items-center justify-center', props.className)}
    >
      <div className={'my-16 w-full max-w-screen-lg lg:w-3/6'}>
        {props.children}
      </div>
    </div>
  )
}
