import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

export function Head1(props: ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1
      {...props}
      className={cn(
        'scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl',
        props.className
      )}
    />
  )
}

export function Head2(props: ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      {...props}
      className={cn(
        'scroll-m-20 pb-2 font-semibold text-3xl tracking-tight first:mt-0',
        props.className
      )}
    />
  )
}

export function Head3(props: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      {...props}
      className={cn(
        'scroll-m-20 font-semibold text-2xl tracking-tight',
        props.className
      )}
    />
  )
}

export function Head4(props: ComponentPropsWithoutRef<'h4'>) {
  return (
    <h4
      {...props}
      className={cn(
        'scroll-m-20 font-semibold text-xl tracking-tight',
        props.className
      )}
    />
  )
}

export function Blockquote(props: ComponentPropsWithoutRef<'blockquote'>) {
  return (
    <blockquote
      {...props}
      className={cn('mt-6 border-l-2 pl-6 italic', props.className)}
    />
  )
}

export function TextTableHeader(props: ComponentPropsWithoutRef<'th'>) {
  return (
    <th
      {...props}
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        props.className
      )}
    />
  )
}

export function TextTableCell(props: ComponentPropsWithoutRef<'td'>) {
  return (
    <td
      {...props}
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        props.className
      )}
    />
  )
}

export function Text(props: ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      {...props}
      className={cn(
        'text-lg leading-7 [&:not(:first-child)]:mt-6',
        props.className
      )}
    />
  )
}

export function Lead(props: ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      {...props}
      className={cn('text-muted-foreground text-xl', props.className)}
    />
  )
}

export function Large(props: ComponentPropsWithoutRef<'p'>) {
  return <p {...props} className={cn('font-medium text-xl', props.className)} />
}

export function Small(props: ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      {...props}
      className={cn('font-medium text-sm leading-none', props.className)}
    />
  )
}

export function Muted(props: ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      {...props}
      className={cn('text-muted-foreground text-sm', props.className)}
    />
  )
}

export function List(props: ComponentPropsWithoutRef<'ul'>) {
  return (
    <ul
      {...props}
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', props.className)}
    />
  )
}
