import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';

import classes from './Layout.module.css';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main className={classes.Container} >{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;