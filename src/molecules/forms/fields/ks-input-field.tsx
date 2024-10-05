import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@kodesmil/elements/atoms'
import type { HTMLInputTypeAttribute, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export const KsInputField = (props: {
  formField: string
  formInputType?: HTMLInputTypeAttribute
  formLabel?: string
  formDescription?: string
  className?: string
  action?: ReactNode
}) => {
  const {
    formField,
    formDescription,
    formLabel,
    action,
    formInputType,
    className,
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
    </div>
  )
}
