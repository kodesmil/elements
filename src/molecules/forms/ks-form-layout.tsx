import type { ReactNode } from 'react'

export function KsFormLayout(props: { children: ReactNode }) {
  return (
    <div className={'flex w-full items-center justify-center'}>
      <div className={'my-16 w-full max-w-screen-lg lg:w-3/6'}>
        {props.children}
      </div>
    </div>
  )
}
