import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Switch,
} from '@covision/elements/atoms'
import { useFormContext } from 'react-hook-form'

export const KsSwitchField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  className?: string
}) => {
  const { formField, formDescription, formLabel, className } = props
  const form = useFormContext()
  return (
    <div className={className}>
      <FormField
        control={form.control}
        name={formField}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="space-y-0.5">
              {formLabel && <FormLabel>{formLabel}</FormLabel>}
              {formDescription && (
                <FormDescription>{formDescription}</FormDescription>
              )}
            </div>
            <div>
              <FormControl>
                <Switch
                  className="h-min border-0 bg-background px-3 py-2 text-base"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  )
}
