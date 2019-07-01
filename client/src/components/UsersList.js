import React from 'react';
import User from './User';

class UsersList extends React.Component {
  countTeams = users => {
    let teamNumbers = [];
    users.map(user => teamNumbers.push(user.team));
    const teams = [...new Set(teamNumbers)];
    return teams.sort().map((team, i) => (
      <div key={i}>
        Team {team}: {this.usersOfTeam(team, users)}
      </div>
    ));
  };

  usersOfTeam = (team, users) => {
    return users
      .filter(user => user.team === team)
      .sort((a, b) => (a.isAdmin < b.isAdmin ? 1 : -1))
      .map(user => (
        <User
          key={user._id}
          id={user._id}
          name={user.name}
          email={user.email}
          team={user.team}
          isAdmin={user.isAdmin}
          getUsers={this.props.getUsers}
        />
      ));
  };

  render() {
    return (
      <div>
        <div className="users-list">
          {this.props.users.users.length === 0 ? (
            <h1>Create a user</h1>
          ) : (
            <h1>Users List</h1>
          )}
          {this.countTeams(this.props.users.users)}
        </div>
      </div>
    );
  }
}

export default UsersList;
