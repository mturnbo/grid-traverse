import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(r, c) {
    let selected = this.props.handler({row: r, col: c});
    this.setState({active: selected});
  }

  render() {
    return (
      <div className={'tile' + (this.state.active ? ' tile-selected' : '')} data-row={this.props.row} data-col={this.props.col} onClick={() => this.toggleActive(this.props.row, this.props.col)}>
        {this.props.row}:{this.props.col}
      </div>
    );
  }
}

Tile.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired
};

export default Tile;
