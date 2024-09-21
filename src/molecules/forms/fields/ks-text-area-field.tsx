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
  formField: string
  formLabel?: string
  formDescription?: string
}) => {
  const { formDescription, formLabel, formField } = props
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={formField}
      render={({ field }) => (
        <FormItem>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>
            <Textarea className={'text-base'} rows={5} {...field} />
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
