import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@covision/elements/atoms'
import { useFormContext } from 'react-hook-form'
import { KsTextEditor } from '../../text-editor/text-editor'

export function KsTextEditorField(props: {
  formField: string
  formLabel?: string
  formDescription?: string
  className?: string
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
