import { shallow } from 'enzyme'

import Button from '../../src/components/Button'

describe('MyComponent', () => {
  it.skip('renders without crashing', () => {
    shallow(<Button />)
  })

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Button />)

    expect(component).toMatchSnapshot()
  })
})
