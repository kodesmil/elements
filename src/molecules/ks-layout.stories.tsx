import type { Meta, StoryObj } from '@storybook/react'

import { KsLayout } from './ks-layout'

const meta = {
  component: KsLayout,
} satisfies Meta<typeof KsLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div className={'h-20 w-full bg-red-500'} />,
  },
}
