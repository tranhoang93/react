import React, { Component } from 'react';
import Filters from '../../components/Filters/Filters';
import MainHeader from '../../components/MainHeader/MainHeader';
import MainBody from '../../components/MainBody/MainBody';
import Search from '../../components/Search/Search';

import classes from './Champions.module.css';

class Champions extends Component {
  render() {
    return (
      <div className={classes.Row}>
        <div className={classes.Sidebar}>
          <Filters />
        </div>
        <div className={classes.Main}>
          <MainHeader>
            <h2>Teamfight Tactics Champions</h2>
            <Search
              className={classes.Search}
              placeholder="Search by name, origin or class..."
              />
          </MainHeader>
          <div className={classes.Divider}></div>
          <MainBody></MainBody>
        </div>
      </div>
    );
  }
};

export default Champions;