import KsIcon, {
  type KsIconNameType,
} from '@covision/elements/molecules/ks-icon'
import Image, { type ImageProps } from 'next/image'

export const KsImage = (
  props: {
    src?: string
    fallbackIconName?: KsIconNameType
  } & ImageProps
) => {
  return props.src?.length > 0 ? (
    <Image {...props} />
  ) : (
    <KsIcon name={props.fallbackIconName ?? 'info'} />
  )
}
