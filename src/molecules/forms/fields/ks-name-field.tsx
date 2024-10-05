import { Button } from '@kodesmil/elements/atoms'
import { generateSillyname } from '@kodesmil/elements/lib'
import { KsTextField } from '@kodesmil/elements/molecules/forms/fields/ks-text-field'
import { useFormContext } from 'react-hook-form'

export const KsNameField = (props: {
  formField: string
  formLabel?: string
  formDescription?: string
  generateButtonName?: string
  className?: string
}) => {
  const { generateButtonName, className, formField } = props
  const form = useFormContext()
  return (
    <div className={className}>
      <KsTextField
        {...props}
        action={
          <Button
            type="button"
            variant={'secondary'}
            onClick={() => {
              form.setValue(formField, generateSillyname())
            }}
          >
            {generateButtonName ?? 'Generate'}
          </Button>
        }
      />
    </div>
  )
}
