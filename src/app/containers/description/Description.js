import React from 'react';
import PropTypes from 'prop-types';

import './description.scss'

const Description = ({ type, name, description, properties, quantity }) => {
  return (
    <div className='info-box'>
      <div className='box rm-bottom info-box-type'>
        <p className='info-text'>{type}</p>
      </div>
      <div className='box rm-bottom info-box-name'>
        <h1 className='title info-text'>{name}</h1>
      </div>
      <div className='box info-box-description'>
        <p className='info-text'>{description}</p>
      </div>
      <div className='box rm-left info-box-property property-one'>
        <div className='info-text'>
          <p className='property-label title'>Size</p>
          <p>{properties.size}</p>
        </div>
      </div>
      <div className='box rm-left info-box-property property-two'>
        <div className='info-text'>
          <p className='property-label title'>Concave</p>
          <p>{properties.concave}</p>
        </div>
      </div>
      <div className='box rm-left info-box-property property-three'>
        <div className='info-text'>
          <p className='property-label title'>Concave</p>
          <p>{properties.concave}</p>
        </div>
      </div>
      <div className='box rm-top rm-left info-box-data-quantity'>
        <p className='info-text'>{quantity}</p>
      </div>
    </div>
  );
}

Description.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  properties: PropTypes.object,
  quantity: PropTypes.string
}

export default Description;
