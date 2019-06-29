import React, { Component } from 'react';

import { getAllProducts } from './services/productsService';

import Routes from './routes/Routes';
import Header from './containers/header/Header';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      error: false,
      list: []
    };
  }

  componentDidMount() {
    getAllProducts()
      .then(data => {
        this.setState({ loaded: true, list: data });
      })
      .catch(err => {
        this.setState({ loaded: true, error: true });
      })
  }

  render() {
    const { loaded, list, error} = this.state;
    if (error) {
      return (
        <div className='loader'>
          <p className='title'>Sorry, there are no products in this moments.</p>
        </div>
      );
    }
    if (loaded) {
      return (
        <div className='app'>
          <Header />
          <Routes list={list}/>
        </div>
      );
    } else {
      return (
        <div className='loader'>
          <p className='title'>Loading ...</p>
        </div>
      );
    }
  }
}

export default App;
