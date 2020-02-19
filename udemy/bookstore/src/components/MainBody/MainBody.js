import React from 'react';

import classes from './MainBody.module.css';

const mainBody = props => {
  return (
    <div className={classes.Wrap}>
      {props.children}
    </div>
  )
}

export default mainBody;