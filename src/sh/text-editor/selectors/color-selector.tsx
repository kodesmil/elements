import { Button } from '@/sh/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/sh/popover'
import { Head3, Text } from '@/sh/text'
import { Check, ChevronDown } from 'lucide-react'
import { EditorBubbleItem, useEditor } from 'novel'

export interface BubbleColorMenuItem {
  name: string
  color: string
}

const TEXT_COLORS: BubbleColorMenuItem[] = [
  {
    name: 'Default',
    color: 'var(--novel-black)',
  },
  {
    name: 'Purple',
    color: '#9333EA',
  },
  {
    name: 'Red',
    color: '#E00000',
  },
  {
    name: 'Yellow',
    color: '#EAB308',
  },
  {
    name: 'Blue',
    color: '#2563EB',
  },
  {
    name: 'Green',
    color: '#008A00',
  },
  {
    name: 'Orange',
    color: '#FFA500',
  },
  {
    name: 'Pink',
    color: '#BA4081',
  },
  {
    name: 'Gray',
    color: '#A8A29E',
  },
]

const HIGHLIGHT_COLORS: BubbleColorMenuItem[] = [
  {
    name: 'Default',
    color: 'var(--novel-highlight-default)',
  },
  {
    name: 'Purple',
    color: '#9333EA',
  },
  {
    name: 'Red',
    color: '#E00000',
  },
  {
    name: 'Yellow',
    color: '#EAB308',
  },
  {
    name: 'Blue',
    color: '#2563EB',
  },
  {
    name: 'Green',
    color: '#008A00',
  },
  {
    name: 'Orange',
    color: '#FFA500',
  },
  {
    name: 'Pink',
    color: '#BA4081',
  },
  {
    name: 'Gray',
    color: '#A8A29E',
  },
]

interface ColorSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ColorSelector = ({ open, onOpenChange }: ColorSelectorProps) => {
  const { editor } = useEditor()

  if (!editor) {
    return null
  }
  const _activeColorItem = TEXT_COLORS.find(({ color }) =>
    editor.isActive('textStyle', { color })
  )

  const _activeHighlightItem = HIGHLIGHT_COLORS.find(({ color }) =>
    editor.isActive('highlight', { color })
  )

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button color="gray" variant="ghost">
          <Text>A</Text>
          <ChevronDown />
        </Button>
      </PopoverTrigger>

      <PopoverContent sideOffset={5} align="start">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Head3>Color</Head3>
            <div className="flex flex-col">
              {TEXT_COLORS.map(({ name, color }, index) => (
                <EditorBubbleItem
                  key={index}
                  onSelect={() => {
                    editor.commands.unsetColor()
                    name !== 'Default' &&
                      editor
                        .chain()
                        .focus()
                        .setColor(color || '')
                        .run()
                  }}
                >
                  <Button variant="ghost" color="gray">
                    <Text style={{ color }}>A</Text>
                    <Text>{name}</Text>
                  </Button>
                </EditorBubbleItem>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <Head3>Background</Head3>
            <div className="flex flex-col">
              {HIGHLIGHT_COLORS.map(({ name, color }, index) => (
                <EditorBubbleItem
                  key={index}
                  onSelect={() => {
                    editor.commands.unsetHighlight()
                    name !== 'Default' &&
                      editor.commands.setHighlight({ color })
                  }}
                >
                  <Button variant="ghost" color="gray">
                    <Text style={{ backgroundColor: color }}>A</Text>
                    <Text>{name}</Text>
                    {editor.isActive('highlight', { color }) && <Check />}
                  </Button>
                </EditorBubbleItem>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
