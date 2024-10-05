import { Head1 } from '@kodesmil/elements/atoms'
import { KsBreadcrumb } from '@kodesmil/elements/molecules'

export function KsPageHeader(props: {
  pageName: string
  breadcrumbs: {
    label: string
    href: string
  }[]
}) {
  return (
    <div className={'flex flex-col gap-4 pb-12'}>
      <KsBreadcrumb breadcrumbs={props.breadcrumbs} />
      <Head1>{props.pageName}</Head1>
    </div>
  )
}
