import 'whatwg-fetch';
import React from 'react';
import { shallow, mount } from 'enzyme';

import Shows from '../../src/components/Shows';

const defaultProps = {
  programType: 'series',
  bannerTitle: 'test title',
};

describe('<Shows />', () => {
  it('should call componentDidMount', () => {
    const spy = jest.spyOn(Shows.prototype, 'componentDidMount');
    mount(<Shows {...defaultProps} />);
    expect(Shows.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it('should call renderContent', () => {
    const spy = jest.spyOn(Shows.prototype, 'renderContent');
    mount(<Shows {...defaultProps} />);
    expect(Shows.prototype.renderContent).toHaveBeenCalled();
  });
});
