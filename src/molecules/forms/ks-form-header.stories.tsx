import type { Meta, StoryObj } from '@storybook/react'

import { KsFormHeader } from '@kodesmil/elements/molecules'

const meta = {
  component: KsFormHeader,
} satisfies Meta<typeof KsFormHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Form Header',
    description: 'This is a form header',
  },
}
