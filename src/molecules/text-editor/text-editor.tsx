import { defaultExtensions } from '@covision/elements/molecules'
import { MenuBar } from '@covision/elements/molecules/text-editor/menu-bar'
import { EditorProvider } from '@tiptap/react'
import { cx } from 'class-variance-authority'

interface EditorProp {
  defaultValue?: string
  onChange: (value: string) => void
}

export const KsTextEditor = ({ defaultValue, onChange }: EditorProp) => {
  return (
    <div
      className={cx(
        'flex w-full min-w-96 max-w-full flex-col rounded-md px-3 pb-12',
        'border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
        'file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm',
        'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50'
      )}
    >
      <EditorProvider
        slotBefore={<MenuBar />}
        content={defaultValue}
        extensions={defaultExtensions}
        editorProps={{
          attributes: {
            class: cx(
              'm-auto placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
              'focus:outline-none prose prose-lg dark:prose-invert prose-headings:font-title font-serif'
            ),
          },
        }}
        onUpdate={({ editor }) => {
          onChange(editor.getHTML())
        }}
      />
    </div>
  )
}
