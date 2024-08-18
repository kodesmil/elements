import { KsDropdownMenu } from '@/molecules/dashboard/ks-dropdown-menu'
import { KsBreadcrumb } from '@/molecules/ks-breadcrumb'
import { KsSheet } from '@/molecules/ks-sheet'
import type { ReactNode } from 'react'

export function KsHeader(props: {
  action: ReactNode
  breadcrumbs: {
    href: string
    label: string
  }[]
}) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <div className={'flex gap-2'}>
        <KsSheet />
        <KsBreadcrumb breadcrumbs={props.breadcrumbs} />
      </div>
      <div className={'flex gap-4'}>
        {props.action}
        <div className={'flex-1'}>
          <KsDropdownMenu />
        </div>
      </div>
    </header>
  )
}
