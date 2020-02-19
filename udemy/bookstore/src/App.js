import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import Champions from './containers/Champions/Champions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Champions />
        </Layout>
      </div>
    );
  }
}
export default App;
