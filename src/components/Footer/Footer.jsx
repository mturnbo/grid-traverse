import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = (props) => (
  <footer className="app-footer">
    <h2>{props.title}</h2>
  </footer>
);

Footer.propTypes = {
  title: PropTypes.string.isRequired
};

export default Footer;
