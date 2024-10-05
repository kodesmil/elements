import { Head1, Text } from '@covision/elements/atoms/shacdn/ui/text'

type TFormHeaderProps = {
  title: string
  description: string
}

export const KsFormHeader = ({ title, description }: TFormHeaderProps) => (
  <div className="flex flex-col space-y-2">
    <Head1>{title}</Head1>
    <Text>{description}</Text>
  </div>
)
