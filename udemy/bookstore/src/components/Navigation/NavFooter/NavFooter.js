import React from 'react';
import NavItem from '../NavItem/NavItem';

import classes from './NavFooter.module.css';

const navFooter = () => (
  <ul className={classes.Nav}>
    <NavItem link="/privacy-policy">Privacy Policy</NavItem>
    <NavItem link="/terms-condition">Terms &amp; Condition</NavItem>
    <NavItem link="/contact">Contact</NavItem>
  </ul>
);

export default navFooter;