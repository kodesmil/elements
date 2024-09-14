import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/atoms'
import type { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

export const KsTextField = (props: {
  formLabel: string
  formField: string
  formDescription: string
  action: ReactNode
}) => {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={props.formField}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.formLabel}</FormLabel>
          <FormControl>
            <div className="flex flex-row items-center gap-2">
              <Input {...field} />
              {props.action}
            </div>
          </FormControl>
          <FormDescription>{props.formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
