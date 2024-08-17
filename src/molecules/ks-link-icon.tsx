import KsIcon, { type KsIconNameType } from '@/molecules/ks-icon'
import clsx from 'clsx'
import Link from 'next/link'

export function KsLinkIcon(props: {
  href: string
  name: string
  icon: KsIconNameType
  selected?: boolean
}) {
  return (
    <Link
      href={props.href}
      className={clsx(
        'flex h-9 w-9 items-center justify-center md:h-8 md:w-8',
        props.selected &&
          'group shrink-0 gap-2 rounded-full bg-primary font-semibold text-lg text-primary-foreground md:text-base',
        !props.selected &&
          'rounded-lg text-muted-foreground transition-colors hover:text-foreground'
      )}
    >
      <KsIcon
        name={props.icon}
        className={clsx(
          props.selected && 'h-4 w-4 transition-all group-hover:scale-110',
          !props.selected && 'h-5 w-5'
        )}
      />
      <span className="sr-only">{props.name}</span>
    </Link>
  )
}
