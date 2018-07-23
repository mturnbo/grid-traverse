import React from 'react';
import { storiesOf } from '@storybook/react';
import Tile from '../src/components/Tile';

const row = 2;
const col = 4;

storiesOf('Tile', module)
  .add('Renders with row and col label', () => (
    <Tile row={row} col={col} />
));
