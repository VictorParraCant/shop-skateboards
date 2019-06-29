import React from 'react';
import PropTypes from 'prop-types';
import classcat from 'classcat';

import './skateboard.scss'

const Skateboard = ({ name, thumbnail }) =>(
  <div className='skate-container'>
    <div className={classcat(['skate-box', thumbnail])}>
      <div className='sticker-box'>
        <p className='brand'>Skateboard</p>
        <h1 className='title product-name'>{name}</h1>
      </div>
    </div>
  </div>
);

Skateboard.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  animated: PropTypes.bool
}

export default Skateboard;
