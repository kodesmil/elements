import { defaultExtensions } from '@covision/elements/molecules'
import { MenuBar } from '@covision/elements/molecules/text-editor/menu-bar'
import { EditorProvider } from '@tiptap/react'

interface EditorProp {
  defaultValue?: string
  onChange: (value: string) => void
}

export const KsTextEditor = ({ defaultValue, onChange }: EditorProp) => {
  return (
    <div className="prose prose-lg dark:prose-invert w-full font-serif prose-headings:font-title focus:outline-none">
      <EditorProvider
        slotBefore={<MenuBar />}
        content={defaultValue}
        extensions={defaultExtensions}
        onUpdate={({ editor }) => {
          onChange(editor.getHTML())
        }}
      />
    </div>
  )
}
