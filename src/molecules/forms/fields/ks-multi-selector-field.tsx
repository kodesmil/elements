import {
  Badge,
  Button,
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
import { DeleteIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

export const KsMultiSelectorField = (props: {
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
        render={({ field }) => {
          return (
            <FormItem>
              <div className="mb-4">
                {formLabel && (
                  <FormLabel className="mt-1 text-base">{formLabel}</FormLabel>
                )}
                {formDescription && (
                  <FormDescription className={'mt-1'}>
                    {formDescription}
                  </FormDescription>
                )}
                <div className="mt-2">
                  <Select
                    onValueChange={async (itemValue) => {
                      field.onChange(
                        field.value?.concat(itemValue) ?? [itemValue]
                      )
                      await form.trigger()
                    }}
                  >
                    <SelectTrigger className="h-min border-0 bg-background px-3 py-2 text-base">
                      <SelectValue
                        className="min-w-min"
                        placeholder={'Select Tag'}
                      />
                    </SelectTrigger>
                    <SelectContent className="h-min border-0 bg-background px-3 py-2 text-base">
                      {selections.map((v) => (
                        <SelectItem key={v.value} value={v.value}>
                          {v.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className={'mt-3 flex flex-row flex-wrap gap-2'}>
                  {selections
                    .filter((item) => {
                      return field.value?.includes(item.value)
                    })
                    .map((item) => (
                      <Badge variant={'secondary'} key={item.value}>
                        <div className={'flex flex-row items-center gap-2'}>
                          <div>{item.name}</div>
                          <Button
                            size={'sm'}
                            variant={'ghost'}
                            className={'m-0 h-7 p-0.5'}
                            type={'button'}
                            onClick={async (e) => {
                              e.preventDefault()
                              field.onChange(
                                field.value?.filter(
                                  (value: string) => value !== item.value
                                )
                              )
                              await form.trigger()
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        </div>
                      </Badge>
                    ))}
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )
        }}
      />
    </div>
  )
}
