import type { ReactNode } from 'react'

export function KsCardHeaderLayout(props: {
  children: ReactNode
  actions: ReactNode
}) {
  return (
    <div className={'flex flex-row justify-between'}>
      <div className={'flex flex-col gap-3'}>{props.children}</div>
      <div className={'flex flex-row'}>{props.actions}</div>
    </div>
  )
}
