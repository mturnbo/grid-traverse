import React from 'react';
import { mount } from 'enzyme';
import HeaderComponent from './index';

const title = 'This Is A Test';
const wrapper = mount(<HeaderComponent title={title} />);

test('Header Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Header Component Title', () => {
  expect(wrapper.prop('title')).toEqual(title);
});
