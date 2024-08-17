import { Head2, Text } from '@/sh/text'

export type KsFormHeaderProps = {
  title: string
  description: string
}

export const KsFormSubheader = ({ title, description }: KsFormHeaderProps) => (
  <div className="flex flex-col space-y-2">
    <Head2>{title}</Head2>
    <Text>{description}</Text>
  </div>
)
