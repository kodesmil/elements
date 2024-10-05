import type { Meta, StoryObj } from '@storybook/react'

import { Form, TooltipProvider } from '@kodesmil/elements/atoms'
import { useForm } from 'react-hook-form'
import { KsTextEditorField } from './ks-text-editor-field'
const defaultP = `
  <p>
  This is likely intended as a placeholder for actual content that would be added later. The surrounding HTML structure in this file demonstrates various heading levels (h1 through h6) and text formatting (bold, italic, underline), which is typical when showcasing the capabilities of a rich text editor.
  </p>
`

const defaultHtml = `
  <h1>Heading 1</h1>
  ${defaultP}
  <h2>Heading 2</h2>
  ${defaultP}
  <h3>Heading 3</h3>
  ${defaultP}
  <h4>Heading 4</h4>
  ${defaultP}
  <h5>Heading 5</h5>
  ${defaultP}
  <h6>Heading 6</h6>
  ${defaultP}
`

const meta = {
  component: KsTextEditorField,
  decorators: [
    (Story) => {
      const form = useForm({
        defaultValues: { example: defaultHtml },
      })
      return (
        <TooltipProvider>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})}>
              <Story />
            </form>
          </Form>
        </TooltipProvider>
      )
    },
  ],
} satisfies Meta<typeof KsTextEditorField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    formField: 'example',
  },
}
