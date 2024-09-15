import type { KsIconNameType } from '@covision/elements/molecules/ks-icon'
import { KsLinkIcon } from '@covision/elements/molecules/ks-link-icon'
import { KsTooltip } from '@covision/elements/molecules/ks-tooltip'

export type TSidebarItem = {
  name: string
  tooltip: string
  href: string
  icon: KsIconNameType
  selected?: boolean
}

export function KsSidebar(props: {
  upperItems: TSidebarItem[]
  lowerItems: TSidebarItem[]
}) {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        {props.upperItems.map((item) => (
          <KsTooltip tooltip={item.tooltip} key={item.name}>
            <KsLinkIcon
              href={item.href}
              name={item.name}
              icon={item.icon}
              selected={item.selected}
            />
          </KsTooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        {props.lowerItems.map((item) => (
          <KsTooltip tooltip={item.tooltip} key={item.name}>
            <KsLinkIcon
              href={item.href}
              name={item.name}
              icon={item.icon}
              selected={item.selected}
            />
          </KsTooltip>
        ))}
      </nav>
    </aside>
  )
}
