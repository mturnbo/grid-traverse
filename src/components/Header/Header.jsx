import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => (
  <header className="app-header">
    <h2>{props.title}</h2>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
