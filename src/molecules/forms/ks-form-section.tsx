import type { ReactNode } from 'react'

type FormSectionProps = {
  children: ReactNode
}

export const KsFormSection = ({ children }: FormSectionProps) => (
  <div className={'flex flex-col space-y-4'}>{children}</div>
)
