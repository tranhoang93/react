import React from 'react';

import classes from './MobileBtn.module.css';

const mobileBtn = props => (
  <div className={classes.Wrap}>
    <div className={classes.Btn} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default mobileBtn;