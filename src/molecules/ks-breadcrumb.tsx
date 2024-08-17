import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/atoms/shacdn/breadcrumb'
import Link from 'next/link'
import React from 'react'

export function KsBreadcrumb(props: {
  breadcrumbs: {
    label: string
    href: string
  }[]
}) {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {props.breadcrumbs.map((link, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild={true}>
                {index !== props.breadcrumbs.length - 1 ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <BreadcrumbPage>{link.label}</BreadcrumbPage>
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== props.breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
