import React from 'react';


// Custom card component for each user's data
const UserCard = (props) => {
  const {
    user,
    onDelete,
    onEdit
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
        <p>
          <a
            href="#"
            className="text-primary"
            onClick={ onEdit }
            data-id={ id }>Edit</a>
        </p>
        <p>
          <a
            href="#"
            className="text-danger"
            onClick={ onDelete }
            data-id={ id }>Delete</a>
        </p>
      </div>
    </div>
  );
};



export default UserCard;


