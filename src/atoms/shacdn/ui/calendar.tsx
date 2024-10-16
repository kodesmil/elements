'use client'
import type { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'

export type CalendarProps = ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return <DayPicker showOutsideDays={showOutsideDays} {...props} />
}
Calendar.displayName = 'Calendar'

export { Calendar }
