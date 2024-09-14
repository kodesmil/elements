import { Button } from '@/atoms'
import { generateSillyname } from '@/lib'
import { KsTextField } from '@/molecules/forms/fields/ks-text-field'
import { useFormContext } from 'react-hook-form'

export const KsNameField = (props: {
  formLabel: string
  formField: string
  formDescription: string
  generateButtonName: string
}) => {
  const form = useFormContext()
  return (
    <KsTextField
      {...props}
      action={
        <Button
          type="button"
          variant={'secondary'}
          onClick={() => {
            form.setValue(props.formField, generateSillyname())
          }}
        />
      }
    />
  )
}
