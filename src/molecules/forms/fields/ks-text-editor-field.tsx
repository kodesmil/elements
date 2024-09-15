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
  formLabel: string
  formField: string
  formDescription: string
}) {
  const form = useFormContext()
  const { formDescription, formLabel, formField } = props
  return (
    <FormField
      control={form.control}
      name={formField}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{formLabel}</FormLabel>
            <FormControl>
              <KsTextEditor {...field} defaultValue={field.value} />
            </FormControl>
            <FormDescription>{formDescription}</FormDescription>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
