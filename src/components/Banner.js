import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ content }) => (
  <div className="banner shadow gradient-grey">
    <div className="wrapper">
      <div className="banner-content">{content}</div>
    </div>
  </div>
);

Banner.propTypes = {
  content: PropTypes.node.isRequired,
};

export default Banner;
