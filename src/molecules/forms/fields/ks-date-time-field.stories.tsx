import { Form } from '@covision/elements/atoms'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { KsDateTimeField } from './ks-date-time-field'

const meta = {
  component: KsDateTimeField,
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
} satisfies Meta<typeof KsDateTimeField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    formField: 'example',
    formLabel: 'Resolved At',
  },
}
