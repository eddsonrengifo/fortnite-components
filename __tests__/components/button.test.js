import { shallow } from 'enzyme'

import Button from '../../src/components/Button'

describe('Button Component Render', () => {
  it.skip('renders without crashing', () => {
    shallow(<Button />)
  })

  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Button />)

    expect(component).toMatchSnapshot()
  })
})
