import React, { Component } from 'react';
import Users from './Users/Users'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class Admin extends Component {
  render() {
    return (
      <div className="admin-container">
        <div className="admin-left-col">
          { this.props.children }
        </div>
        <div className="admin-right-col">
          <Users />
        </div>
      </div>
    )
  }
}

export default Admin;
