import { defaultExtensions } from '@kodesmil/elements/molecules'
import { MenuBar } from '@kodesmil/elements/molecules/text-editor/menu-bar'
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
        'min-w-max max-w-full rounded-md border border-input-border bg-input-background px-3 pb-12'
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
