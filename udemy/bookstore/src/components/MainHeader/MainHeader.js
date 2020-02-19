import React from 'react';

import classes from './MainHeader.module.css';

const mainHeader = props => {
  return (
    <div className={classes.Wrap}>
      {props.children}
    </div>
  )
}

export default mainHeader;