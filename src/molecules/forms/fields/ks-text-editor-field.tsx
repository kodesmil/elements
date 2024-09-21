import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@covision/elements/atoms'
import { KsTextEditor } from '@covision/elements/molecules'
import { useFormContext } from 'react-hook-form'

export function KsTextEditorField(props: {
  formField: string
  formLabel?: string
  formDescription?: string
}) {
  const { formDescription, formLabel, formField } = props
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={formField}
      render={({ field }) => {
        return (
          <FormItem>
            {formLabel && <FormLabel>{formLabel}</FormLabel>}
            <FormControl>
              <KsTextEditor {...field} defaultValue={field.value} />
            </FormControl>
            {formDescription && (
              <FormDescription>{formDescription}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
