import type { Extension, Mark, Node } from '@tiptap/core'
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import ListItem from '@tiptap/extension-list-item'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import { StarterKit } from '@tiptap/starter-kit'
import { cx } from 'class-variance-authority'

export const defaultExtensions: (Node | Extension | Mark)[] = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
      HTMLAttributes: {
        class: cx('list-disc list-outside leading-3 -mt-2'),
      },
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
      HTMLAttributes: {
        class: cx('list-decimal list-outside leading-3 -mt-2'),
      },
    },
    listItem: {
      HTMLAttributes: {
        class: cx('leading-normal -mb-2'),
      },
    },
    blockquote: {
      HTMLAttributes: {
        class: cx('border-l-4 border-primary'),
      },
    },
    codeBlock: {
      HTMLAttributes: {
        class: cx(
          'rounded-md bg-muted text-muted-foreground border p-5 font-mono font-medium'
        ),
      },
    },
    code: {
      HTMLAttributes: {
        class: cx('rounded-md bg-muted  px-1.5 py-1 font-mono font-medium'),
        spellcheck: 'false',
      },
    },
    horizontalRule: false,
    dropcursor: {
      color: '#DBEAFE',
      width: 4,
    },
    gapcursor: false,
  }),
  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: 'https',
  }),
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Highlight,
]
