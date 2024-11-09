import { defaultExtensions } from '@covision/elements/molecules'
import { MenuBar } from '@covision/elements/molecules/text-editor/menu-bar'
import { suggestions } from '@covision/elements/molecules/text-editor/suggestions'
import {
  SlashCmd,
  SlashCmdProvider,
  enableKeyboardNavigation,
} from '@harshtalks/slash-tiptap'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import { cx } from 'class-variance-authority'

interface EditorProp {
  defaultValue?: string
  onChange: (value: string) => void
}

export const KsTextEditor = ({ defaultValue, onChange }: EditorProp) => {
  const editor = useEditor({
    extensions: defaultExtensions,
    content: defaultValue,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      handleDOMEvents: {
        keydown: (_, v) => enableKeyboardNavigation(v),
      },
      attributes: {
        class: cx(
          'm-auto placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          'focus:outline-none prose prose-lg dark:prose-invert prose-headings:font-title font-serif'
        ),
      },
    },
  })

  return (
    <div
      className={cx(
        'flex w-full min-w-96 max-w-full flex-col rounded-md px-3 pt-16 pb-12',
        'border-0 bg-background transition-colors',
        'file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50'
      )}
    >
      <SlashCmdProvider>
        <EditorContent editor={editor} />
        <BubbleMenu editor={editor}>
          <MenuBar editor={editor} />
        </BubbleMenu>
        <SlashCmd.Root editor={editor}>
          <SlashCmd.Cmd className={'bg-card'}>
            <SlashCmd.Empty>No commands available</SlashCmd.Empty>
            <SlashCmd.List>
              {suggestions.map((item) => {
                return (
                  <SlashCmd.Item
                    value={item.title}
                    onCommand={(val) => {
                      item.command(val)
                    }}
                    className="flex w-full cursor-pointer items-center space-x-2 rounded-md p-2 text-left text-sm hover:bg-muted hover:text-muted-foreground aria-selected::bg-muted aria-selected:text-muted-foreground "
                    key={item.title}
                  >
                    <div className={'px-3 py-2'}>{item.title}</div>
                  </SlashCmd.Item>
                )
              })}
            </SlashCmd.List>
          </SlashCmd.Cmd>
        </SlashCmd.Root>
      </SlashCmdProvider>
    </div>
  )
}
