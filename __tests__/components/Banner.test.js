import React from 'react';
import { shallow } from 'enzyme';

import Banner from '../../src/components/Banner';

describe('<Banner />', () => {
  it('should render content from prop', () => {
    const content = 'test message';
    const wrapper = shallow(<Banner content={content} />);
    expect(wrapper.find('.banner-content').text()).toBe(content);
  });
});
