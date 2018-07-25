import React from 'react';
import { mount } from 'enzyme';
import FooterComponent from './index';

const title = 'This Is A Test';
const wrapper = mount(<FooterComponent title={title} />);

test('Footer Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Footer Component Title', () => {
  expect(wrapper.prop('title')).toEqual(title);
});
