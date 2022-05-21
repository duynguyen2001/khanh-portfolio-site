import React from 'react';
import PropTypes from 'prop-types';
import backgroundWord from './backgroundWord.svg';
export const Background = ({...props }) => (
  <div><img src = {backgroundWord}></img></div>
);

Background.propTypes = {
};

Background.defaultProps = {
};
