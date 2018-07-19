import React from 'react';
import PropTypes from 'prop-types';
import './Tile.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  toggleActive() {
    this.setState({active: !this.state.active});
  }

  render() {
    return (
      <div className={'tile' + (this.state.active ? ' tile-selected' : '')} onClick={this.toggleActive.bind(this)}>
        {this.props.row}:{this.props.col}
      </div>
    );
  }
}

Tile.propTypes = {
  row: PropTypes.string.isRequired,
  col: PropTypes.string.isRequired
};

export default Tile;
