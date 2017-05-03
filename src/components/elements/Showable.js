import React from 'react';

const Showable = (props) => {
  const {
    show,
    children
  } = props;

  if (!show) {
    return null;
  }

  return <div>{ children }</div>;
};




export default Showable;





