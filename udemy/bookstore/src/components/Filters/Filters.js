import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/action/action';
import FiltersHeader from './FiltersHeader/FiltersHeader';
import Cost from './Cost/Cost';
import Class from './Class/Class';
import Origin from './Origin/Origin';

import classes from './Filters.module.css';

class Filters extends Component {
  render() {
    return (
      <div className={classes.Wrap}>
        <FiltersHeader clicked={this.props.onReset}/>
        <div className={classes.Divider}></div>
        <Cost title="Cost" />
        <Class title="Class" />
        <Origin title="Origin" />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  filter: state.champions.filter
});

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch({type: actionType.RESET})
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);