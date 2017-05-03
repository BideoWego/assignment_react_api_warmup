import React from 'react';
import Input from './elements/Input';
import InputGroup from './elements/InputGroup';
import Button from './elements/Button';
import Alert from './elements/Alert';
import Showable from './elements/Showable';


function _santizeProps(props) {
  return {
    first_name: props.user.first_name || '',
    last_name: props.user.last_name || '',
    avatar: props.user.avatar || '',
    id: props.user.id
  };
}


class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = _santizeProps(props);

    this.onInputChange = this.onInputChange.bind(this);
  }


  componentWillReceiveProps(props) {
    this.setState(_santizeProps(props));
  }


  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  render() {
    const title = this.state.id ? 'Edit User' : 'Add User';

    console.log(this.state);

    return (
      <form className="container" onSubmit={ this.props.onSubmit }>
        <h1>{ title }</h1>

        <Showable show={ this.props.error }>
          <Alert type="danger">
            Oops, there was a problem...
          </Alert>
        </Showable>

        <Showable show={ this.state.id }>
          <Input type="hidden" value={ this.state.id } name="id" />
        </Showable>

        <InputGroup  
          name="first_name"
          labelText="First Name">
          <Input name="first_name" value={ this.state.first_name } onChange={ this.onInputChange } />
        </InputGroup>

        <InputGroup  
          name="last_name"
          labelText="Last Name">
          <Input name="last_name" value={ this.state.last_name } onChange={ this.onInputChange } />
        </InputGroup>

        <InputGroup  
          name="avatar"
          labelText="Photo Link">
          <Input name="avatar" value={ this.state.avatar } onChange={ this.onInputChange } />
        </InputGroup>

        <Button type="submit" color="primary">
          Save User
        </Button>      
      </form>
    );
  }
}




export default UserForm;







