import type { ReactNode } from 'react'

export type FormSectionProps = {
  children: ReactNode
}

export const KsFormSubsection = ({ children }: FormSectionProps) => (
  <div className={'flex flex-col space-y-2'}>{children}</div>
)
