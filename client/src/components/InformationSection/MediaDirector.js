import PropTypes from 'prop-types';
import React from 'react';

const MediaDirector = ({ director }) => <h3>{director}</h3>;

MediaDirector.propTypes = {
  director: PropTypes.string,
};

export default MediaDirector;
