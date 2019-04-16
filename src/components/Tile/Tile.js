import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

const Tile = ({ row, col, handler }) => {
  const [active, setActive] = useState(false);

  const toggleActive = (r, c) => {
    const selected = handler({ row: r, col: c });
    return setActive(selected);
  };

  return (
    <div className={'tile' + (active ? ' tile-selected' : '')} data-row={row} data-col={col} onClick={() => toggleActive(row, col)}>
      {row}:{col}
    </div>
  );
};

Tile.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired
};

export default Tile;
