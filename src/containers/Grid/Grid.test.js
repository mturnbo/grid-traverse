import React from 'react';
import { mount } from 'enzyme';
import GridComponent from './index';

const rows = 5;
const cols = 5;
const wrapper = mount(<GridComponent cols={cols} rows={rows} />);

test('Grid Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Grid Component - rows prop', () => {
  expect(wrapper.prop('rows')).toEqual(rows);
});

test('Grid Component - cols prop', () => {
  expect(wrapper.prop('cols')).toEqual(cols);
});
