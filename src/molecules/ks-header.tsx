import { KsDropdownMenu } from '@covision/elements/molecules/dashboard/ks-dropdown-menu'
import { KsSheet } from '@covision/elements/molecules/ks-sheet'
import type { ReactNode } from 'react'
import { cn } from '../lib'

export function KsHeader(props: {
  action: ReactNode
  className?: string
}) {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b px-4 py-2 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6',
        props.className
      )}
    >
      <div className={'flex gap-2'}>
        <KsSheet />
      </div>
      <div className={'flex items-center gap-4'}>
        {props.action}
        <div className={'flex-1'}>
          <KsDropdownMenu />
        </div>
      </div>
    </header>
  )
}
