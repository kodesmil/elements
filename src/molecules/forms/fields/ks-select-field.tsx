import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@covision/elements/atoms'
import { useFormContext } from 'react-hook-form'

export const KsSelectField = (props: {
  formLabel: string
  formField: string
  formDescription: string
  placeholder: string
  selections: { value: string; name: string }[]
}) => {
  const form = useFormContext()
  const { formField, formLabel, formDescription, placeholder, selections } =
    props
  return (
    <FormField
      control={form.control}
      name={formField}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formLabel}</FormLabel>
          <FormControl>
            <div className="flex flex-row items-center gap-2">
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {selections.map((v) => (
                    <SelectItem key={v.value} value={v.value}>
                      {v.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </FormControl>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
