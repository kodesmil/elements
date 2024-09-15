import { Button } from '@covision/elements/atoms'
import { generateSillyname } from '@covision/elements/lib'
import { KsTextField } from '@covision/elements/molecules/forms/fields/ks-text-field'
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
