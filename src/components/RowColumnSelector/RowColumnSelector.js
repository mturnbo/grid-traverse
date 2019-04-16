import React from 'react';
import PropTypes from 'prop-types';
import './RowColumnSelector.scss';

class RowColumnSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {num: null};
  }

  setNum(n) {
    this.setState({num: n});
  }

  render() {
    const generateOptions = [...Array(this.props.size)].map((s, i) =>
      <option value={i + 1} key={i}>{i + 1}</option>
    );

    return (
      <div>
        <label htmlFor="rcSelector">{this.props.label}</label>
        <select id="rcSelector">
          {generateOptions}
        </select>
      </div>
    );
  }
}

RowColumnSelector.propTypes = {
  selector: PropTypes.oneOf(['rows','cols']).isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default RowColumnSelector;
