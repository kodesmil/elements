import KsIcon, { type KsIconNameType } from '@/molecules/ks-icon'
import Image, { type ImageProps } from 'next/image'

export const KsImage = (
  props: {
    src?: string
    fallbackIconName?: KsIconNameType
  } & ImageProps
) => {
  return props.src?.length ? (
    <Image {...props} />
  ) : (
    <KsIcon name={props.fallbackIconName ?? 'info'} />
  )
}
