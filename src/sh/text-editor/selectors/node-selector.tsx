import { Button } from '@/sh/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/sh/popover'
import { Text } from '@/sh/text'
import {
  Check,
  CheckSquare,
  ChevronDown,
  Code,
  Heading1,
  Heading2,
  Heading3,
  ListOrdered,
  type LucideIcon,
  TextIcon,
  TextQuote,
} from 'lucide-react'
import { EditorBubbleItem, type EditorInstance, useEditor } from 'novel'

export type SelectorItem = {
  name: string
  icon: LucideIcon
  command: (editor: EditorInstance) => void
  isActive: (editor: EditorInstance) => boolean
}

const items: SelectorItem[] = [
  {
    name: 'Text',
    icon: TextIcon,
    command: (editor) => editor.chain().focus().clearNodes().run(),
    // I feel like there has to be a more efficient way to do this – feel free to PR if you know how!
    isActive: (editor) =>
      editor.isActive('paragraph') &&
      !editor.isActive('bulletList') &&
      !editor.isActive('orderedList'),
  },
  {
    name: 'Heading 1',
    icon: Heading1,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleHeading({ level: 1 }).run(),
    isActive: (editor) => editor.isActive('heading', { level: 1 }),
  },
  {
    name: 'Heading 2',
    icon: Heading2,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleHeading({ level: 2 }).run(),
    isActive: (editor) => editor.isActive('heading', { level: 2 }),
  },
  {
    name: 'Heading 3',
    icon: Heading3,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleHeading({ level: 3 }).run(),
    isActive: (editor) => editor.isActive('heading', { level: 3 }),
  },
  {
    name: 'To-do List',
    icon: CheckSquare,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleTaskList().run(),
    isActive: (editor) => editor.isActive('taskItem'),
  },
  {
    name: 'Bullet List',
    icon: ListOrdered,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleBulletList().run(),
    isActive: (editor) => editor.isActive('bulletList'),
  },
  {
    name: 'Numbered List',
    icon: ListOrdered,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleOrderedList().run(),
    isActive: (editor) => editor.isActive('orderedList'),
  },
  {
    name: 'Quote',
    icon: TextQuote,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleBlockquote().run(),
    isActive: (editor) => editor.isActive('blockquote'),
  },
  {
    name: 'Code',
    icon: Code,
    command: (editor) =>
      editor.chain().focus().clearNodes().toggleCodeBlock().run(),
    isActive: (editor) => editor.isActive('codeBlock'),
  },
]
interface NodeSelectorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const NodeSelector = ({ open, onOpenChange }: NodeSelectorProps) => {
  const { editor } = useEditor()
  if (!editor) {
    return null
  }

  const activeItem = items.filter((item) => item.isActive(editor)).pop() ?? {
    name: 'Multiple',
  }

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger>
        <Button variant={'ghost'} className="space-x-2">
          <Text>{activeItem.name}</Text>
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <EditorBubbleItem
              key={index}
              onSelect={(editor) => {
                item.command(editor)
                onOpenChange(false)
              }}
            >
              <Button
                variant="ghost"
                color="gray"
                className="flex flex-row items-center"
              >
                <item.icon width={'20px'} />
                <Text>{item.name}</Text>
                {activeItem.name === item.name && <Check />}
              </Button>
            </EditorBubbleItem>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
