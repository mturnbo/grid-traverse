import React from 'react';
import { mount } from 'enzyme';
import TileComponent from './index';

const row = 2;
const col = 3;
const wrapper = mount(<TileComponent row={row} col={col} />);

test('Tile Component Renders', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Tile Component - row prop', () => {
  expect(wrapper.prop('row')).toEqual(row);
});

test('Tile Component - col prop', () => {
  expect(wrapper.prop('col')).toEqual(col);
});
