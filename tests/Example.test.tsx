import renderer from 'react-test-renderer'
import { expect, it } from 'vitest'
import { KsExample } from '../src'

it('renders correctly', () => {
  const tree = renderer
    .create(<KsExample text="Clicked this many times" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
