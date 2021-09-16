import { shallow } from 'enzyme';
import React from 'react';

import { expectSnapshot } from 'tests/boilerplate';

import ${NAME} from './${NAME}';


const getProps = (overrides = {}) => ({
  
  ...overrides,
});

describe('<${NAME} />', () => {
  it('renders properly', () => {
    const props = getProps();
    const wrapper = shallow(<${NAME} {...props} />);
    expectSnapshot(wrapper);
  });
});
