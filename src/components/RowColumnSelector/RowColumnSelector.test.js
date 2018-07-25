import React from 'react';
import { mount } from 'enzyme';
import RowColumnSelectorComponent from './index';

const wrapper = mount(<RowColumnSelectorComponent label="Test" selector="rows" size={10} />);

test('RowColumnSelector Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});
