import { Button } from '@/sh/button'

export function KsFormActions(props: {
  submitText: string
  cancelText: string
  deleteText: string
  onDelete?: () => void
  onCancel: () => void
}) {
  return (
    <div className="flex flex-row justify-between">
      {props.onDelete && (
        <Button variant="destructive" color="red" onClick={props.onDelete}>
          {props.deleteText}
        </Button>
      )}
      <div className="flex flex-row space-x-4">
        <Button variant="ghost" onClick={props.onCancel}>
          {props.cancelText}
        </Button>
        <Button type="submit">{props.submitText}</Button>
      </div>
    </div>
  )
}
