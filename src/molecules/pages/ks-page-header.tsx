import { Head1 } from '@covision/elements/atoms'
import { cn } from '@covision/elements/lib'
import { KsBreadcrumb } from '@covision/elements/molecules'
import type { ReactNode } from 'react'

export function KsPageHeader(props: {
  pageName: string
  className?: string
  action?: ReactNode
  breadcrumbs: {
    label: string
    href: string
  }[]
}) {
  return (
    <div className={cn('flex flex-row justify-between', props.className)}>
      <div className={'flex flex-col gap-4 pb-12'}>
        <KsBreadcrumb breadcrumbs={props.breadcrumbs} />
        <Head1>{props.pageName}</Head1>
      </div>
      {props.action}
    </div>
  )
}
