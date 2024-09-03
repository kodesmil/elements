import type { Meta, StoryObj } from '@storybook/react'
import { KsHeader } from './ks-header'

const meta = {
  component: KsHeader,
} satisfies Meta<typeof KsHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    action: <div>Action</div>,
  },
}
