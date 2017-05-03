import React from 'react';


const Select = (props) => {
  const {
    options,
    ...otherProps
  } = props;

  const optionsElements = options.map((option) => {
    return (
      <option
        key={ option }
        value={ option }>
        { option }
      </option>
    )
  });

  return (
    <select
      className="form-control"
      { ...otherProps }>
      { optionsElements }
    </select>
  );
};




export default Select;




