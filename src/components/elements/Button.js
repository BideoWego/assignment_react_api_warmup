import React from 'react';


const Button = (props) => {
  const {
    size,
    color,
    children,
    type
  } = props;

  const sizeClass = size ? `btn-${ size }` : '';

  return (
    <button
      type={ type ? type : 'button' }
      className={ `btn btn-${ color } ${ sizeClass }`}
    >
      { children }
    </button>
  );
};




export default Button;





