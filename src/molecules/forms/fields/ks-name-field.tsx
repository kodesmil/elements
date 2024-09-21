import { Button } from '@covision/elements/atoms'
import { generateSillyname } from '@covision/elements/lib'
import { KsTextField } from '@covision/elements/molecules/forms/fields/ks-text-field'
import { useFormContext } from 'react-hook-form'

export const KsNameField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  generateButtonName?: string
}) => {
  const { generateButtonName } = props
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
        >
          {generateButtonName ?? 'Generate'}
        </Button>
      }
    />
  )
}
