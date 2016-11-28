import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class Admin extends Component {
  render() {
    return (
      <div className="admin-buttons-container">
        <Link to='/users'>
          <RaisedButton label="Lista użytkowników" className="admin-button"/>
        </Link>
        <Link to='/addUser'>
          <RaisedButton label="Stwórz użytkownika" className="admin-button"/>
        </Link>
      </div>
    )
  }
}

export default Admin;
