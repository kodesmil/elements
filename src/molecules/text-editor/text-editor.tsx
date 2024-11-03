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
        'min-w-96 max-w-full rounded-md px-3 pb-12',
        'flex w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-neutral-950 file:text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:focus-visible:ring-neutral-300 dark:placeholder:text-neutral-400 dark:file:text-neutral-50'
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
