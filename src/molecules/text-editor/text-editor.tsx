import { defaultExtensions } from '@covision/elements/molecules'
import { MenuBar } from '@covision/elements/molecules/text-editor/menu-bar'
import { EditorContent, useEditor } from '@tiptap/react'

interface EditorProp {
  defaultValue?: string
  onChange: (value: string) => void
}

export const KsTextEditor = ({ defaultValue, onChange }: EditorProp) => {
  const editor = useEditor({
    extensions: defaultExtensions,
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
    content: defaultValue,
  })

  return (
    <div className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      <MenuBar />
      <EditorContent
        editor={editor}
        className={
          'prose prose-lg dark:prose-invert prose-headings:font-title focus:outline-none'
        }
      />
    </div>
  )
}
