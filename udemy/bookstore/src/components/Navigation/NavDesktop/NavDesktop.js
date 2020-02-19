import React from 'react';
import Logo from '../../Logo/Logo';
import NavItem from '../NavItem/NavItem';

import classes from './NavDesktop.module.css';

const navDesktop = props => {
  return (
    <div className={classes.Wrap}>
      <nav className={classes.Container}>
        <Logo link="/"/>
        <ul className={classes.Nav} >
          <NavItem link="/champions">Champions</NavItem>
          <NavItem link="/tierlists">Tier Lists</NavItem>
          <NavItem link="/item-builder">Item Builder</NavItem>
          <NavItem link="/team-builder">Team Builder</NavItem>
        </ul>
      </nav>
    </div>
  );
}

export default navDesktop;