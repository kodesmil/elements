import type { ReactNode } from 'react'
import { KsInputField } from './ks-input-field'

export const KsTextField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  className?: string
  action?: ReactNode
}) => <KsInputField {...props} />
