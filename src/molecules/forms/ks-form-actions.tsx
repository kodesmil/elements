import { Button } from '@covision/elements/atoms/shacdn/ui/button'

export function KsFormActions(props: {
  submitText?: string
  cancelText?: string
  deleteText?: string
  onDelete?: () => void
  onCancel?: () => void
}) {
  return (
    <div className="flex w-full flex-row">
      <div className="flex flex-row justify-between">
        {props.onDelete && (
          <Button
            type={'button'}
            variant="destructive"
            color="red"
            onClick={props.onDelete}
          >
            {props.deleteText ?? 'Delete'}
          </Button>
        )}
        <div className="flex flex-row space-x-4">
          {props.onCancel && (
            <Button type={'button'} variant="ghost" onClick={props.onCancel}>
              {props.cancelText ?? 'Cancel'}
            </Button>
          )}
          <Button type="submit">{props.submitText ?? 'Submit'}</Button>
        </div>
      </div>
    </div>
  )
}
