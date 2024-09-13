import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/atoms'
import { generateSillyname } from '@/lib'
import { useFormContext } from 'react-hook-form'

export const KsNameField = (props: {
  formLabel: string
  formField: string
  formDescription: string
  generateButtonName: string
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
              <Button
                type="button"
                variant={'secondary'}
                onClick={() => {
                  form.setValue(props.formField, generateSillyname())
                }}
              >
                {props.generateButtonName}
              </Button>
            </div>
          </FormControl>
          <FormDescription>{props.formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
