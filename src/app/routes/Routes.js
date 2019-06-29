import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Products from '../containers/products/Products';

const DELAY_TRANSITION = 1000

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    }
  }

  onEnter = () => {
    this.setState({ animated: true });
  }

  onExited = () => {
    this.setState({ animated: false });
  }

  render() {
    const { list } = this.props
    return (
      <Route render={({ location }) => (
        <TransitionGroup
          childFactory={child => React.cloneElement (
            child,
            { timeout: DELAY_TRANSITION }
          )}
        >
          <CSSTransition
            key={location.key}
            timeout={DELAY_TRANSITION}
            onEnter={this.onEnter}
            onExited={this.onExited}
          >
            <Switch location={location}>
              {list.map(product => (
                <Route
                  key={product.id}
                  exact
                  path={`/${product.id}`}
                  render={({ location }) => (
                    <Products product={product} animated={this.state.animated}/>
                  )}
                />
              ))}
              <Route
                path={'/'}
                render={() => <Products product={list[0]} />}
              />
              <Route render={() => <Redirect to='/' />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    )
  }
};

Routes.propTypes = {
  list: PropTypes.array.isRequired
};

export default Routes;
