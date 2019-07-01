import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
  state = {};

  componentDidMount() {
    if (this.props.match) {
      axios
        .get(this.props.match.params.userId)
        .then(res => this.setState({ users: res.data }))
        .catch(err => console.log(err));
    }
  }

  handleClick = () => {
    if (this.props.match) {
      axios
        .delete(this.props.match.params.userId)
        .then(() => this.props.history.push('/'))
        .catch(err => console.log(err));
    } else {
      axios
        .delete(`users/${this.props.id}`)
        .then(() => this.props.getUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="user-card">
        <p>
          Name: {this.state.users ? this.state.users.name : this.props.name}
        </p>
        {(this.state.users && this.state.users.isAdmin) ||
        this.props.isAdmin ? (
          <p style={{ fontWeight: 'bold' }}>Administrator</p>
        ) : (
          ''
        )}
        <p>
          Email: {this.state.users ? this.state.users.email : this.props.email}
        </p>
        {!this.state.users ? '' : <p>Team: {this.state.users.team}</p>}
        {!this.state.users ? (
          <Link to={`users/${this.props.id}`}>
            <p style={{ color: 'blue' }}>View profile</p>
          </Link>
        ) : (
          <Link to={'/'}>
            <p style={{ color: 'blue' }}>Go back</p>
          </Link>
        )}
        <p
          onClick={this.handleClick}
          style={{ color: 'red', cursor: 'pointer' }}
        >
          Delete
        </p>
      </div>
    );
  }
}

export default User;
