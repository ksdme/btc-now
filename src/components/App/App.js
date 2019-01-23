import './App.css';
import React, { Component } from 'react';

import Price from '../Price/Price';
import FetchPrice from '../../providers/FetchPrice';

class App extends Component {

  constructor() {
    super();

    this.state = {
      current: -1,
    };

    this.setupRefresh();
    this.refresh();
  }

  refresh() {
    FetchPrice.getCurrent()
      .then((rate) => this.setState({ current: rate }));
  }

  setupRefresh() {
    setInterval(() => this.refresh(), 10000);
  }

  render() {
    return (
      <div className='dtc v-mid tc ph3'>
        <Price price={this.state.current} />
      </div>
    );
  }
}

export default App;
