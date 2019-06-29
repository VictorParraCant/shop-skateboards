import React from 'react';
import PropTypes from 'prop-types';
import classcat from 'classcat';

import './bgAnimated.scss'

const BgAnimated = ({ backgrounds }) => (
  <div className='product-view-background-animation'>
    <div className={classcat(['top', backgrounds.top])} />
    <div className='background-animation-bottom'>
      <div className={classcat(['right', backgrounds.right])} />
      <div className={classcat(['left', backgrounds.left])} />
    </div>
  </div>
);

BgAnimated.propTypes = {
  backgrounds: PropTypes.object
};

export default BgAnimated;
