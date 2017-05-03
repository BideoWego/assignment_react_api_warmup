import React, { Component } from 'react';
import UserList from './UserList';
import Jumbotron from './Jumbotron';
import UserForm from './UserForm';
import serialize from 'form-serialize';
import { default as _ } from 'lodash';


class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      isLoading: false
    };

    this.onAddUser = this.onAddUser.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
  }


  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('https://reqres.in/api/users?delay=1')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          users: json.data,
          isLoading: false
        });
      });
  }


  onAddUser(e) {
    e.preventDefault();

    const form = e.target;
    const body = serialize(form, { hash: true });

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = {
      headers,
      method: 'POST',
      body: JSON.stringify(body)
    };

    this.setState({ isLoading: true });

    fetch('https://reqres.in/api/users', options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${ response.status } ${ response.statusText }`);
        }
        return response.json();
      })
      .then((json) => {
        this.setState({
          isLoading: false,
          users: [
            ...this.state.users,
            {
              id: +json.id,
              first_name: json.first_name[0],
              last_name: json.first_name[1],
              avatar: json.avatar
            }
          ]
        }, () => form.reset());
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          isLoading: false,
          error
        });
      });

    return false;
  }


  onDeleteUser(e) {
    e.preventDefault();

    const options = {
      method: 'DELETE'
    };
    const id = +e.target.getAttribute('data-id');

    fetch(`https://reqres.in/api/users/${ id }`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${ response.status } ${ response.statusText }`);
        }
        console.log(response);
      })
      .then(() => {
        let users = this.state.users;
        console.log(id, users);
        _.remove(users, (user) => user.id === id);
        this.setState({ users });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          isLoading: false,
          error
        });
      });


    console.log('Deleting...', e.target);

    return false;
  }


  render() {
    const {
      users,
      isLoading,
      error
    } = this.state;

    return (
      <main id="App" className="container">
        <Jumbotron
          title="Users App"
          tagline="Cruding users" />
        
        <UserList
          onDelete={ this.onDeleteUser }
          users={ users }
          isLoading={ isLoading } />

        <UserForm onSubmit={ this.onAddUser } error={ error } />
      </main>
    );
  }
}

export default App;















