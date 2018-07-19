import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

const Tile = ({row, col}) => {
  return (
    <div className="tile">
      {row}:{col}
    </div>
  );
};

Tile.propTypes = {
  row: PropTypes.string.isRequired,
  col: PropTypes.string.isRequired
};

export default Tile;
