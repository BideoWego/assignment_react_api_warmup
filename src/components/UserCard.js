import React from 'react';


// Custom card component for each user's data
const UserCard = (props) => {
  const {
    user,
    onDelete
  } = props;

  const {
    id,
    first_name,
    last_name,
    avatar
  } = user;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div
      className="UserCard card"
      style={ { maxWidth: '128px' } }>

      <img
        className="card-img-top img-fluid"
        src={ avatar }
        alt="user avatar" />

      <div className="card-block">
        <h4>{ first_name } { last_name }</h4>
        <a
          href="#"
          className="text-danger"
          onClick={ onDelete }
          data-id={ id }>&times;</a>
      </div>
    </div>
  );
};



export default UserCard;


