import type { Meta, StoryFn } from '@storybook/react'

import { KsExample } from '../index'

export default {
  title: 'Example',
  component: KsExample,
  argTypes: {},
} as Meta<typeof KsExample>

const Template: StoryFn<typeof KsExample> = (args) => <KsExample {...args} />

export const Primary = Template.bind({})

Primary.args = {
  text: 'Clicked this many times:',
}
