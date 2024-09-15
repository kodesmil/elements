import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
} from '@covision/elements/atoms'
import { useFormContext } from 'react-hook-form'

export const KsTextAreaField = (props: {
  formLabel: string
  formField: string
  formDescription: string
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
            <Textarea className={'text-base'} rows={5} {...field} />
          </FormControl>
          <FormDescription>{props.formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
