import React from 'react';
import Tile from '../../components/Tile';
import './Grid.scss';
import PropTypes from "prop-types";

const Grid = ({rows, cols}) => {
  const generateTiles = (row, cols) => [...Array(cols)].map((item, index) =>
    <Tile row={row} col={index + 1} />
  );

  return (
    <div className="grid">
      {[...Array(rows)].map((r, i) => <div className="row">{generateTiles(i + 1, cols)}</div>)}
    </div>
  );
};

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired
};

export default Grid;
