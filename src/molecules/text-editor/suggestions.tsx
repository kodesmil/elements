import { createSuggestionsItems } from '@harshtalks/slash-tiptap'

export const suggestions = createSuggestionsItems([
  {
    title: 'Heading 1',
    searchTerms: ['h1'],
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .toggleHeading({ level: 1 })
        .run()
    },
  },
  {
    title: 'Paragraph',
    searchTerms: ['p'],
    command: ({ editor, range }) => {
      editor
        .chain()
        .focus()
        .deleteRange(range)
        .toggleNode('paragraph', 'paragraph')
        .run()
    },
  },
  {
    title: 'Bullet List',
    searchTerms: ['unordered', 'point'],
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleBulletList().run()
    },
  },
  {
    title: 'Ordered List',
    searchTerms: ['ordered', 'point', 'numbers'],
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleOrderedList().run()
    },
  },
])
