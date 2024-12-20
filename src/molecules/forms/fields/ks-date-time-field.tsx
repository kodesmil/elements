import {
  Button,
  Calendar,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@covision/elements/atoms'
import { cn } from '@covision/elements/lib'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export const KsDateTimeField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  className?: string
}) => {
  const { formField, formDescription, formLabel, className } = props
  const [isOpen, setIsOpen] = useState(false)
  const [time, setTime] = useState<string>('05:00')
  const [date, setDate] = useState<Date | undefined>(undefined)
  const form = useFormContext()
  return (
    <div className={cn('flex flex-row space-x-2', className)}>
      <FormField
        control={form.control}
        name={formField}
        render={({ field }) => (
          <FormItem className="flex flex-col align-top">
            {formLabel && <FormLabel>{formLabel}</FormLabel>}
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild={true}>
                <FormControl>
                  <Button
                    variant={'ghost'}
                    className={cn(
                      'h-min rounded-md border-0 bg-background px-3 py-2 text-base'
                    )}
                  >
                    {field.value ? (
                      `${format(field.value, 'PPP')}`
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto border border-input-border bg-input-background p-0 text-foreground"
                align="start"
              >
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                  selected={date || field.value}
                  onSelect={(selectedDate) => {
                    const [hours, minutes] = time?.split(':') ?? [12, 0]
                    selectedDate?.setHours(
                      Number.parseInt(hours),
                      Number.parseInt(minutes)
                    )
                    setDate(selectedDate)
                    field.onChange(selectedDate)
                  }}
                  onDayClick={() => setIsOpen(false)}
                  fromYear={2000}
                  toYear={new Date().getFullYear()}
                />
              </PopoverContent>
            </Popover>
            <FormDescription>Set your date and time.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={formField}
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Time</FormLabel>
            <FormControl>
              <Select
                defaultValue={time}
                onValueChange={(e) => {
                  setTime(e)
                  if (date) {
                    const [hours, minutes] = e.split(':')
                    const newDate = new Date(date.getTime())
                    newDate.setHours(
                      Number.parseInt(hours),
                      Number.parseInt(minutes)
                    )
                    setDate(newDate)
                    field.onChange(newDate)
                  }
                }}
              >
                <SelectTrigger className="w-[120px] font-base focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className="h-[15rem]">
                    {Array.from({ length: 96 }).map((_, i) => {
                      const hour = Math.floor(i / 4)
                        .toString()
                        .padStart(2, '0')
                      const minute = ((i % 4) * 15).toString().padStart(2, '0')
                      return (
                        <SelectItem key={i} value={`${hour}:${minute}`}>
                          {hour}:{minute}
                        </SelectItem>
                      )
                    })}
                  </ScrollArea>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
