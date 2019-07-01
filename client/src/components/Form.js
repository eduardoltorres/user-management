import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    email: '',
    team: 0,
    isAdmin: false,
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, team, isAdmin } = this.state;
    const newUser = { name, email, team, isAdmin };

    this.props.handleSubmit(newUser);

    this.setState({
      name: '',
      email: '',
      team: 0,
      isAdmin: false,
    });
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>User Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              name="name"
              type="text"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Email: </label>
            <input
              name="email"
              type="text"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Team: </label>
            <input
              name="team"
              type="number"
              min="0"
              max="5"
              required
              value={this.state.team}
              onChange={this.handleInputChange}
            />
          </div>

          <div>
            <label>Administrator</label>
            <input
              name="isAdmin"
              type="checkbox"
              checked={this.state.isAdmin}
              onChange={this.handleInputChange}
            />
          </div>

          <input type="submit" value="Create user" />
        </form>
      </div>
    );
  }
}

export default Form;
