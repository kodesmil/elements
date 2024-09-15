import type { Meta, StoryObj } from '@storybook/react'

import {
  Head1,
  Head2,
  Head3,
  Head4,
  Large,
  Small,
  Text,
  View,
} from '@covision/elements/atoms'

const meta = {
  component: View,
} satisfies Meta<typeof View>

export default meta

type Story = StoryObj<typeof meta>

const defaultChildren = 'Cats are the best friends of humans'

export const Default: Story = {
  args: {
    children: (
      <div className={'flex flex-col'}>
        <div className={'bg-green-100'}>
          <Head1 className={'bg-green-50'}>Head1: {defaultChildren}</Head1>
        </div>
        <div className={'bg-red-100'}>
          <Head2 className={'bg-red-50'}>Head2: {defaultChildren}</Head2>
        </div>
        <div className={'bg-blue-100'}>
          <Head3 className={'bg-blue-50'}>Head3: {defaultChildren}</Head3>
        </div>
        <div className={'bg-yellow-100'}>
          <Head4 className={'bg-yellow-50'}>Head4: {defaultChildren}</Head4>
        </div>
        <div className={'bg-teal-100'}>
          <Large className={'bg-teal-50'}>Large: {defaultChildren}</Large>
        </div>
        <div className={'bg-purple-100'}>
          <Text className={'bg-purple-50'}>Text: {defaultChildren}</Text>
        </div>
        <div className={'bg-orange-100'}>
          <Small className={'bg-orange-50'}>Small: {defaultChildren}</Small>
        </div>
      </div>
    ),
  },
}
