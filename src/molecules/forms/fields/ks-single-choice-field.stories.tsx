import { Form } from '@covision/elements/atoms'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { KsSingleChoiceField } from './ks-single-choice-field'

const meta = {
  component: KsSingleChoiceField,
  decorators: [
    (Story) => {
      const form = useForm()
      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <Story />
          </form>
        </Form>
      )
    },
  ],
} satisfies Meta<typeof KsSingleChoiceField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    formField: 'example',
    selections: [
      { name: 'Option 1', value: 'Option 1' },
      { name: 'Option 2', value: 'Option 2' },
    ],
  },
}
