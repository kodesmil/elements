'use client'
import {
  EditorBubble,
  EditorContent,
  EditorRoot,
  type JSONContent,
} from 'novel'
import { ImageResizer, handleCommandNavigation } from 'novel/extensions'
import { useState } from 'react'

import { defaultExtensions } from '@/sh/text-editor/extensions'
import { ColorSelector } from '@/sh/text-editor/selectors/color-selector'
import { LinkSelector } from '@/sh/text-editor/selectors/link-selector'
import { NodeSelector } from '@/sh/text-editor/selectors/node-selector'
import { TextButtons } from '@/sh/text-editor/selectors/text-buttons'
import { handleImageDrop, handleImagePaste } from 'novel/plugins'
import { uploadFn } from './image-upload'

const extensions = [...defaultExtensions]

interface EditorProp {
  defaultValue?: JSONContent
  onChange: (value: JSONContent) => void
}
const Editor = ({ defaultValue, onChange }: EditorProp) => {
  const [openNode, setOpenNode] = useState(false)
  const [openColor, setOpenColor] = useState(false)
  const [openLink, setOpenLink] = useState(false)

  return (
    <div className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
      <EditorRoot>
        <EditorContent
          {...(defaultValue && { initialContent: defaultValue })}
          extensions={extensions}
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) =>
              handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) =>
              handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class:
                'prose prose-lg dark:prose-invert prose-headings:font-title focus:outline-none',
            },
          }}
          onUpdate={({ editor }) => {
            onChange(editor.getJSON())
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorBubble
            tippyOptions={{
              placement: 'top',
            }}
          >
            <div className="flex flex-row space-x-2 bg-background">
              <NodeSelector open={openNode} onOpenChange={setOpenNode} />
              <LinkSelector open={openLink} onOpenChange={setOpenLink} />
              <TextButtons />
              <ColorSelector open={openColor} onOpenChange={setOpenColor} />
            </div>
          </EditorBubble>
        </EditorContent>
      </EditorRoot>
    </div>
  )
}

export default Editor
