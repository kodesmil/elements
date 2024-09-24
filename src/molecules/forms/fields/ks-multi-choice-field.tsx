import {
  Checkbox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@covision/elements/atoms'
import { useFormContext } from 'react-hook-form'

export const KsMultiChoiceField = (props: {
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
        render={() => (
          <FormItem>
            <div className="mb-4">
              {formLabel && (
                <FormLabel className="text-base">{formLabel}</FormLabel>
              )}
              {formDescription && (
                <FormDescription>{formDescription}</FormDescription>
              )}
            </div>
            {selections.map((item) => (
              <FormField
                key={item.value}
                control={form.control}
                name={formField}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.value}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.value)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.value])
                              : field.onChange(
                                  field.value?.filter(
                                    (value: string) => value !== item.value
                                  )
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal text-sm">
                        {item.name}
                      </FormLabel>
                    </FormItem>
                  )
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
