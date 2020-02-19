import React from 'react';

const withClass = (WrappedCOmponent, className) => (
  props => (
    <div className={className}>
      <WrappedCOmponent {...props} />
    </div>
  )
);

export default withClass;