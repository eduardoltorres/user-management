import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import UsersList from './UsersList';

class Home extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios.get('users').then(res => this.setState({ users: res.data }));
  };

  handleSubmit = newUser => {
    axios.post('users', newUser).then(() => this.getUsers());
  };

  render() {
    return (
      <div>
        <Form handleSubmit={this.handleSubmit} />
        <UsersList users={this.state} getUsers={this.getUsers} />
      </div>
    );
  }
}

export default Home;
