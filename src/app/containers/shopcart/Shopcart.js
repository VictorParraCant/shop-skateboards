import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import './shopcart.scss';

const Shopcart = ({ price, quantity, handlerChange, handlerClick, animated }) => (
  <div className='shopcart'>
    <div className='price'>
      <span>$</span>
      <CountUp
        className='price-number'
        start={0}
        end={price}
        duration={0.4}
        decimals={2}
        decimal='.'
      />
    </div>
    <div className='add-shopcart'>
      <div className='input-shopcart'>
        <input
          name='quantity'
          type='number'
          value={quantity}
          onChange={handlerChange}
          placeholder='1'
        />
      </div>

      <div type='button' className='button button-add' onClick={animated ? null : handlerClick}>
        <span>ADD TO CART</span>
      </div>
    </div>
  </div>
);

Shopcart.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.string,
  handlerChange: PropTypes.func,
  handlerClick: PropTypes.func
}

export default Shopcart;
