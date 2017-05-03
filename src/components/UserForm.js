import React from 'react';
import Input from './elements/Input';
import InputGroup from './elements/InputGroup';
import Button from './elements/Button';
import Alert from './elements/Alert';
import Showable from './elements/Showable';


const UserForm = (props) => {
  const {
    error,
    onSubmit
  } = props;

  const title = props.data.id ? 'Edit User' : 'Add User';
  const data = props.data || {};

  return (
    <form className="container" onSubmit={ onSubmit }>
      <h1>{ title }</h1>

      <Showable show={ error }>
        <Alert type="danger">
          Oops, there was a problem...
        </Alert>
      </Showable>

      <Input type="hidden" value={ data.id } name="id" />

      <InputGroup  
        name="first_name"
        labelText="First Name">
        <Input name="first_name" defaultValue={ data.first_name } />
      </InputGroup>

      <InputGroup  
        name="last_name"
        labelText="Last Name">
        <Input name="last_name" defaultValue={ data.last_name } />
      </InputGroup>

      <InputGroup  
        name="avatar"
        labelText="Photo Link">
        <Input name="avatar" defaultValue={ data.avatar } />
      </InputGroup>

      <Button type="submit" color="primary">
        Save User
      </Button>      
    </form>
  );
};




export default UserForm;







