import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../../store/action/action';

import classes from './AccordionItem.module.css';

const accordionItem = props => {
  const val = props.filter[props.category];

  let selectedClass = (val.indexOf(props.value) !== -1) ? `${classes.Item} ${classes.Selected}` : classes.Item;

  return (
    <li
      className={selectedClass}
      onClick={() => props.onFilter(props.category, props.value)}
      name={props.value}
      category={props.category}
    >
      <img className={`${classes.Icon} ${props.iconClass}`} alt={props.name} src={props.srcImg}/>
      {props.children}
    </li>
  )
}

const mapStateToProps = state => ({
  filter: state.champions.filter
});

const mapDispatchToProps = dispatch => ({
  onFilter: (category, value) => dispatch({type: actionType.FILTER, category: category, value: value})
});

export default connect(mapStateToProps, mapDispatchToProps)(accordionItem);