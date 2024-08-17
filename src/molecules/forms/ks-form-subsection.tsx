import type { ReactNode } from 'react'

export type FormSectionProps = {
  children: ReactNode
}

export const KsFormSubsection = ({ children }: FormSectionProps) => (
  <div>{children}</div>
)
