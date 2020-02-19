import React from 'react';
import Button from 'react-bootstrap/Button';

import classes from './FiltersHeader.module.css';

const filtersHeader = props => {
  return (
    <div className={classes.Header}>
      <h2 className={classes.Title}>Filters</h2>
      <Button
        onClick={props.clicked}
        variant="default"
        className={classes.Btn}>Reset</Button>
    </div>
  );
}

export default filtersHeader;