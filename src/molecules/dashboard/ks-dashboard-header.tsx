import { Button } from '@covision/elements/atoms'
import { Head3 } from '@covision/elements/atoms/shacdn/ui/text'
import { cn } from '@covision/elements/lib'
import type { ReactNode } from 'react'

export function KsDashboardHeader(props: {
  action: ReactNode
  createHref: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-row', props.className)}>
      <Head3>{props.title}</Head3>
      <div>
        {props.action}
        <a href={props.createHref}>
          <Button>Create</Button>
        </a>
      </div>
    </div>
  )
}
