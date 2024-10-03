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
    <div>
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
