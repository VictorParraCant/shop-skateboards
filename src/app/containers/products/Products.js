import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Skate from '../../components/product/Skateboard';

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
          <Skate
            name={product.name}
            thumbtail={product.thumbtail}
          />
        </div>
        <div className='product-data'>

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
