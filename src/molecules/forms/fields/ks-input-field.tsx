import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@covision/elements/atoms'
import type { HTMLInputTypeAttribute, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export const KsInputField = (props: {
  formField: string
  formInputType?: HTMLInputTypeAttribute
  formLabel?: string
  formDescription?: string
  action?: ReactNode
}) => {
  const { formField, formDescription, formLabel, action, formInputType } = props
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
              <Input {...field} type={formInputType ?? 'text'} />
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
