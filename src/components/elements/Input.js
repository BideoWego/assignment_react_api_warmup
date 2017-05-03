import React from 'react';


const Input = (props) => {
  const classNames = `form-control ${ props.className ? props.className : '' }`;
  const {
    value,
    ...otherProps
  } = props;

  return (
    <input className={ classNames } defaultValue={ value } { ...otherProps } />
  );
};


Input.defaultProps = {
  type: 'text'
};




export default Input;




