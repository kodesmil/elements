import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
} from '@covision/elements/atoms'
import type { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export const KsTextAreaField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  placeholder?: string
  className?: string
  action?: ReactNode
}) => {
  const {
    formDescription,
    formLabel,
    formField,
    className,
    placeholder,
    action,
  } = props
  const form = useFormContext()
  return (
    <div className={className}>
      <FormField
        control={form.control}
        name={formField}
        render={({ field }) => (
          <FormItem>
            {formLabel && <FormLabel>{formLabel}</FormLabel>}
            <FormControl>
              <div className="flex flex-row items-start gap-2">
                <Textarea
                  placeholder={placeholder}
                  className={'h-min border-0 bg-background px-4 py-3 text-base'}
                  rows={5}
                  {...field}
                />
                {action}
              </div>
            </FormControl>
            {formDescription && (
              <FormDescription>{formDescription}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
