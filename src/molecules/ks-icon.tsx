import type { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

export type KsIconNameType = keyof typeof dynamicIconImports

interface KsIconProps extends LucideProps {
  name: KsIconNameType
}

export const KsIcon = ({ name, ...props }: KsIconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
}
