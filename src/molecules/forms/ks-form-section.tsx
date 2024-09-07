import type { ReactNode } from 'react'

type FormSectionProps = {
  children: ReactNode
}

export const KsFormSection = ({ children }: FormSectionProps) => (
  <div className={'flex flex-col gap-2 py-4'}>{children}</div>
)
