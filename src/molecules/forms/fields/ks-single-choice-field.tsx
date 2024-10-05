import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  RadioGroup,
  RadioGroupItem,
} from '@covision/elements/atoms'
import { useFormContext } from 'react-hook-form'

export const KsSingleChoiceField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  className?: string
  selections: { value: string; name: string }[]
}) => {
  const form = useFormContext()
  const { formField, formLabel, formDescription, selections, className } = props
  return (
    <div className={className}>
      <FormField
        control={form.control}
        name={formField}
        render={({ field }) => (
          <FormItem>
            {formLabel && <FormLabel>{formLabel}</FormLabel>}
            <FormControl>
              <div className="flex flex-row items-center gap-2">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={
                    field.value === undefined || field.value === null
                      ? undefined
                      : String(field.value)
                  }
                  className="flex flex-col space-y-1"
                >
                  {selections.map((selection) => (
                    <FormItem
                      key={selection.value}
                      className="flex items-center space-x-3 space-y-0"
                    >
                      <FormControl>
                        <RadioGroupItem value={selection.value} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {selection.name}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </div>
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
