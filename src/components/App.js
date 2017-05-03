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
      isLoading: false,
      data: {
        first_name: '',
        last_name: '',
        avatar: ''
      }
    };

    this.onCreateOrUpdateUser = this.onCreateOrUpdateUser.bind(this);
    this.onDeleteUser = this.onDeleteUser.bind(this);
    this.onEditUser = this.onEditUser.bind(this);
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


  onCreateOrUpdateUser(e) {
    e.preventDefault();

    const form = e.target;
    const body = serialize(form, { hash: true });

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const id = +body.id;
    const method = id ? 'PUT' : 'POST';
    let url = 'https://reqres.in/api/users';
    url += id ? `/${ id }` : '';

    const options = {
      headers,
      method,
      body: JSON.stringify(body)
    };

    this.setState({ isLoading: true });

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${ response.status } ${ response.statusText }`);
        }
        return response.json();
      })
      .then((json) => {
        let users = this.state.users;
        if (id) {
          let index = _.findIndex(users, (user) => user.id === id);
          users[index] = {
            id: json.id,
            first_name: json.first_name,
            last_name: json.last_name,
            avatar: json.avatar
          };
        } else {
          users.push(json);
        }

        this.setState({
          isLoading: false,
          users: users,
          data: {
            first_name: '',
            last_name: '',
            avatar: ''
          }
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


  onEditUser(e) {
    e.preventDefault();
    const id = +e.target.getAttribute('data-id');
    const user = _.find(this.state.users, (user) => user.id === id);
    this.setState({ data: user });
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
      })
      .then(() => {
        let users = this.state.users;
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

    return false;
  }


  render() {
    const {
      users,
      isLoading,
      error,
      data
    } = this.state;

    return (
      <main id="App" className="container">
        <Jumbotron
          title="Users App"
          tagline="Cruding users" />
        
        <UserList
          onEdit={ this.onEditUser }
          onDelete={ this.onDeleteUser }
          users={ users }
          isLoading={ isLoading } />

        <UserForm data={ data } onSubmit={ this.onCreateOrUpdateUser } error={ error } />
      </main>
    );
  }
}




export default App;















