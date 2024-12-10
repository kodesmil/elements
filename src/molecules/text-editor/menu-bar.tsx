import { Button, type LoadingButtonProps } from '@covision/elements/atoms'
import { KsTooltip } from '@covision/elements/molecules'
import { ListBulletIcon } from '@radix-ui/react-icons'
import type { Editor } from '@tiptap/core'
import {
  AlignStartHorizontalIcon,
  BoldIcon,
  Code2Icon,
  CodeIcon,
  EraserIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HighlighterIcon,
  ItalicIcon,
  LinkIcon,
  ListOrderedIcon,
  QuoteIcon,
  RedoIcon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextCursorIcon,
  UndoIcon,
  WrapTextIcon,
} from 'lucide-react'

const MenuButton = (
  props: { isActive: boolean; tooltip: string } & LoadingButtonProps
) => (
  <KsTooltip tooltip={props.tooltip}>
    <Button
      size={'sm'}
      type={'button'}
      variant={props.isActive ? 'secondary' : 'ghost'}
      className={'h-8 w-8 rounded-none border p-1.5'}
      {...props}
    />
  </KsTooltip>
)

export const MenuBar = (props: {
  editor: Editor | null
}) => {
  const { editor } = props
  if (!editor) {
    return 'Editor Not Found'
  }
  return (
    <div className="flex flex-col rounded px-3 py-2 backdrop-blur-lg backdrop-filter">
      <div className="flex flex-row">
        <MenuButton
          tooltip={'Bold'}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
        >
          <BoldIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Italic'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
        >
          <ItalicIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Strike'}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
        >
          <StrikethroughIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Link'}
          onClick={() => {
            const previousUrl = editor.getAttributes('link').href
            const url = window.prompt('URL', previousUrl)
            if (url === null) {
              return
            }
            if (url === '') {
              editor.chain().focus().extendMarkRange('link').unsetLink().run()
              return
            }
            editor
              .chain()
              .focus()
              .extendMarkRange('link')
              .setLink({ href: url })
              .run()
          }}
          isActive={editor.isActive('link')}
        >
          <LinkIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Code'}
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
        >
          <CodeIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Clear'}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          isActive={false}
        >
          <EraserIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Remove Formatting'}
          isActive={false}
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          <RemoveFormattingIcon />
        </MenuButton>
      </div>
      <div className="flex flex-row rounded">
        <MenuButton
          tooltip={'Paragraph'}
          onClick={() => editor.chain().focus().setParagraph().run()}
          isActive={editor.isActive('paragraph')}
        >
          <TextCursorIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Heading 1'}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive('heading', { level: 1 })}
        >
          <Heading1Icon />
        </MenuButton>
        <MenuButton
          tooltip={'Heading 2'}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive('heading', { level: 2 })}
        >
          <Heading2Icon />
        </MenuButton>
        <MenuButton
          tooltip={'Heading 3'}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive('heading', { level: 3 })}
        >
          <Heading3Icon />
        </MenuButton>
        <MenuButton
          tooltip={'Heading 4'}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          isActive={editor.isActive('heading', { level: 4 })}
        >
          <Heading4Icon />
        </MenuButton>
        <MenuButton
          tooltip={'Heading 5'}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          isActive={editor.isActive('heading', { level: 5 })}
        >
          <Heading5Icon />
        </MenuButton>
        <MenuButton
          tooltip={'Heading 6'}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          isActive={editor.isActive('heading', { level: 6 })}
        >
          <Heading6Icon />
        </MenuButton>
      </div>
      <div className="flex flex-row rounded">
        <MenuButton
          tooltip={'Bullet List'}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
        >
          <ListBulletIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Ordered List'}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
        >
          <ListOrderedIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Code Block'}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive('codeBlock')}
        >
          <Code2Icon />
        </MenuButton>
        <MenuButton
          tooltip={'Blockquote'}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
        >
          <QuoteIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Horizontal Rule'}
          isActive={false}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <AlignStartHorizontalIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Wrap Text'}
          isActive={false}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <WrapTextIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Undo'}
          isActive={false}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <UndoIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Redo'}
          isActive={false}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <RedoIcon />
        </MenuButton>
        <MenuButton
          tooltip={'Highlight'}
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          isActive={editor.isActive('textStyle', { color: '#958DF1' })}
        >
          <HighlighterIcon />
        </MenuButton>
      </div>
    </div>
  )
}
