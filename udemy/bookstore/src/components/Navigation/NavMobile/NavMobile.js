import React from 'react';
import NavItem from '../NavItem/NavItem';
import MobileBtn from './MobileBtn/MobileBtn';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

import classes from './NavMobile.module.css';

const navMobile = (props) => {
  let classArr = [classes.Wrap, classes.Close];
  if (props.active) {
    classArr = [classes.Wrap, classes.Open];
  }

  return (
    <Aux>
      <Backdrop activated={props.active} clicked={props.closed}/>
      <div className={classArr.join(' ')}>
        <div className={classes.BtnMobileWrap}>
          <MobileBtn clicked={props.mobileBtnClicked}/>
        </div>
        <ul className={classes.Nav}>
          <NavItem link="/champions">Champions</NavItem>
          <NavItem link="/tierlists">Tier Lists</NavItem>
          <NavItem link="/item-builder">Item Builder</NavItem>
          <NavItem link="/team-builder">Team Builder</NavItem>
        </ul>
      </div>
    </Aux>
  );
}

export default navMobile;