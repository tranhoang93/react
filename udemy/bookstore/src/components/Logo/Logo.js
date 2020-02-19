import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/icons/logo.jpg';

import classes from './Logo.module.css';

const Logo = props => (
  <div className={classes.Wrap}>
    <NavLink to={props.link} exact className={classes.Link}>
      <img src={logo} alt='logo'/>
    </NavLink>
  </div>
);

export default Logo;