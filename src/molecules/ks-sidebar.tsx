import {
  KsIcon,
  type KsIconNameType,
} from '@covision/elements/molecules/ks-icon'
import clsx from 'clsx'
import Link from 'next/link'
import { KsTooltip } from './ks-tooltip'

export type TSidebarItem = {
  name: string
  tooltip: string
  href: string
  icon: KsIconNameType
  selected?: boolean
}

const linkClassName = (selected: boolean | undefined) => {
  return clsx(
    'flex h-9 w-9 items-center justify-center md:h-8 md:w-8',
    selected &&
      'group shrink-0 gap-2 rounded-full bg-accent font-semibold text-accent-foreground text-lg md:text-base',
    !selected &&
      'rounded-lg text-primary-foreground transition-colors hover:text-primary-foreground/50'
  )
}
const iconClassName = (selected: boolean | undefined) => {
  return clsx(
    selected && 'h-4 w-4 transition-all group-hover:scale-110',
    !selected && 'h-5 w-5'
  )
}

export function KsSidebar(props: {
  upperItems: TSidebarItem[]
  lowerItems: TSidebarItem[]
}) {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col bg-primary sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {props.upperItems?.map(({ href, selected, icon, name, tooltip }) => (
          <KsTooltip key={name} tooltip={tooltip}>
            <Link href={href} className={linkClassName(selected)}>
              <KsIcon name={icon} className={iconClassName(selected)} />
              <span className="sr-only">{name}</span>
            </Link>
          </KsTooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        {props.lowerItems?.map(({ href, selected, icon, name, tooltip }) => (
          <KsTooltip key={name} tooltip={tooltip}>
            <Link key={name} href={href} className={linkClassName(selected)}>
              <KsIcon name={icon} className={iconClassName(selected)} />
              <span className="sr-only">{name}</span>
            </Link>
          </KsTooltip>
        ))}
      </nav>
    </aside>
  )
}
