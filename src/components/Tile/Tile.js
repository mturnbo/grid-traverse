import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStateValue } from '../../state';
import './Tile.scss';

const Tile = ({ row, col }) => {
  const [{ selectedTiles }, dispatch] = useStateValue();

  const isActive = !!selectedTiles.filter(t => t.row === row && t.col === col).length;

  const toggleActive = (r, c) => {
    dispatch({
      type: 'updateSelectedTiles',
      tile: {
        row: r,
        col: c
      }
    });
  };

  return (
    <div
      className={'tile' + (isActive ? ' tile-selected' : '')}
      data-row={row}
      data-col={col}
      onClick={() => toggleActive(row, col)}
    >
      {row}:{col}
    </div>
  );
};

Tile.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired
};

export default Tile;
