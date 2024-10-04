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
        'ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        'prose prose-lg dark:prose-invert max-w-full rounded-md border border-input bg-background px-3 py-2 font-serif prose-headings:font-title text-foreground'
      )}
    >
      <EditorProvider
        slotBefore={<MenuBar />}
        content={defaultValue}
        extensions={defaultExtensions}
        editorProps={{
          attributes: {
            class: 'focus:outline-none',
          },
        }}
        onUpdate={({ editor }) => {
          onChange(editor.getHTML())
        }}
      />
    </div>
  )
}
