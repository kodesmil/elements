import { cn } from '@covision/elements/lib'
import type { ReactNode } from 'react'

type FormSectionProps = {
  children: ReactNode
  className?: string
}

export const KsFormSection = ({ children, className }: FormSectionProps) => (
  <div className={cn('flex flex-col space-y-8', className)}>{children}</div>
)
