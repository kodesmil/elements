import { Button } from '@kodesmil/elements/atoms'
import { Head3 } from '@kodesmil/elements/atoms/shacdn/ui/text'
import type { ReactNode } from 'react'

export function KsDashboardHeader(props: {
  action: ReactNode
  createHref: string
  title: string
}) {
  return (
    <div className="flex flex-row">
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
