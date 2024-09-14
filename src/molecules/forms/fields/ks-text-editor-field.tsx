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

  return (
    <FormField
      control={form.control}
      name={props.formField}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.formLabel}</FormLabel>
          <FormControl>
            <KsTextEditor
              {...field}
              defaultValue={form.getValues().blogPostContent}
            />
          </FormControl>
          <FormDescription>{props.formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
