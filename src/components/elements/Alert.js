import React from 'react'


const Alert = (props) => {
  const {
    type,
    children
  } = props;

  return (
    <div
      className={ `alert alert-${ type }` }
      role="alert">
      { children }
    </div>
  );
}



export default Alert;



