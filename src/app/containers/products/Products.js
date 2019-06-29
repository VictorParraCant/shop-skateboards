import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import BackgroundAnimated from '../../components/bgAnimated/BgAnimated';
import Skate from '../../components/product/Skateboard';
import Description from '../description/Description';
import Shopcart from '../shopcart/Shopcart';

import './products.scss';

class Products extends Component {

  handlerInputChange = value => {
    console.log(value);
  }

  handlerAddToCart = () => {
    const { history, product } = this.props;
    const next = parseInt(product.id) + 1;

    history.push(`/${next}`)
  }

  render() {
    const { product, animated } = this.props;
    return (
      <div className='container-page'>
        <div className='product-view'>
          <BackgroundAnimated backgrounds={product.backgrounds}/>
          <Skate
            name={product.name}
            thumbnail={product.thumbnail}
          />
        </div>
        <div className='product-data'>
          <Description
              type={product.type}
              name={product.name}
              description={product.description}
              properties={product.properties}
              quantity={product.quantity}
            />

            <Shopcart
              price={product.price}
              handlerChange={e => this.handlerInputChange(e.target.value)}
              handlerClick={this.handlerAddToCart}
              animated={animated}
            />
        </div>
      </div>
    );
  }
}

Products.propTypes = {
  product: PropTypes.object.isRequired,
  history: PropTypes.object
};

export default withRouter(Products);
