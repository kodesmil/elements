import { Button } from '@/atoms/shacdn/ui/button'
import { Input } from '@/atoms/shacdn/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/atoms/shacdn/ui/popover'
import { Check, Trash } from 'lucide-react'
import { useEditor } from 'novel'
import { useEffect, useRef } from 'react'

export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch (_e) {
    return false
  }
}
export function getUrlFromString(str: string) {
  if (isValidUrl(str)) {
    return str
  }
  try {
    if (str.includes('.') && !str.includes(' ')) {
      return new URL(`https://${str}`).toString()
    }
  } catch (_e) {
    return null
  }
}
interface LinkSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const LinkSelector = ({ open, onOpenChange }: LinkSelectorProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { editor } = useEditor()

  // Autofocus on input by default
  useEffect(() => {
    inputRef.current?.focus()
  })
  if (!editor) {
    return null
  }

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button color="gray">↗ Link</Button>
      </PopoverTrigger>
      <PopoverContent align="start" sideOffset={10}>
        <form
          onSubmit={(e) => {
            const target = e.currentTarget as HTMLFormElement
            e.preventDefault()
            const input = target[0] as HTMLInputElement
            const url = getUrlFromString(input.value)
            url && editor.chain().focus().setLink({ href: url }).run()
          }}
        >
          <div className="flex flex-row space-x-2">
            <Input
              ref={inputRef}
              defaultValue={editor.getAttributes('link').href || ''}
            />
            {editor.getAttributes('link').href ? (
              <Button
                variant="ghost"
                onClick={() => {
                  editor.chain().focus().unsetLink().run()
                }}
              >
                <Trash />
              </Button>
            ) : (
              <Button variant="ghost">
                <Check />
              </Button>
            )}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}
