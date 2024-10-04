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
  className?: string
}) => {
  const { formDescription, formLabel, formField, className } = props
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
              <Textarea rows={5} {...field} />
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
