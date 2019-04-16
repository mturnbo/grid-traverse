import React from 'react';
import Tile from 'components/Tile';
import './Grid.scss';
import PropTypes from "prop-types";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTiles: []
    };
    this.updateSelectedTiles = this.updateSelectedTiles.bind(this);
  }

  updateSelectedTiles(tile) {
    let tiles = this.state.selectedTiles;
    const tileSelected = tiles.some(t => t.row === tile.row && t.col === tile.col);

    if (tileSelected) {
      this.setState({
        selectedTiles: tiles.filter(t => !(t.row === tile.row && t.col === tile.col))
      });
      return false;
    }

    if (tiles.length < 2) {
      tiles.push(tile);
      this.setState({
        selectedTiles: tiles
      });
      return true;
    }

    return false;
  }

  render() {
    const generateTiles = (row, cols) => [...Array(cols)].map((item, index) => <Tile row={row} col={index + 1} handler={this.updateSelectedTiles} />);

    return (
      <div className="grid">
        {[...Array(this.props.rows)].map((r, i) => <div className="row">{generateTiles(i + 1, this.props.cols)}</div>)}
      </div>
    );
  }
}

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired
};

export default Grid;
