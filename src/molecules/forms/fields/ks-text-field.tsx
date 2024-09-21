import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@covision/elements/atoms'
import type { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export const KsTextField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  action?: ReactNode
}) => {
  const { formField, formDescription, formLabel, action } = props
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={formField}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <div className="flex flex-row items-center gap-2">
              <Input {...field} />
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
  )
}
