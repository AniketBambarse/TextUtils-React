import React from 'react';
import PropTypes from 'prop-types';

const SimpleComponent = ({ title, aboutText }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{aboutText}</p>
    </div>
  );
};

SimpleComponent.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

SimpleComponent.defaultProps = {
  title: 'Default Title',
  aboutText: 'Default About Text',
};

export default SimpleComponent;
