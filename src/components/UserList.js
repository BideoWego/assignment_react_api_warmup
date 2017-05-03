import React from 'react';
import UserCard from './UserCard';




const UserList = (props) => {
  const {
    users,
    isLoading,
    onDelete,
    onEdit
  } = props;

  const usersList = users.map((user) => {
    return (
      <UserCard
        user={ user }
        key={ user.id }
        onDelete={ onDelete }
        onEdit={ onEdit } />
    );
  });

  let content;
  if (!usersList.length && !isLoading) {
    content = <p className="text-danger">No Users</p>;
  } else {
    content = (
      <div className="card-group">
        { isLoading ? <p>Loading...</p> : usersList }
      </div>
    );
  }

  return (
    <div className="container">
      <h1>User List</h1>
      { content }
    </div>
  );
};




export default UserList;












