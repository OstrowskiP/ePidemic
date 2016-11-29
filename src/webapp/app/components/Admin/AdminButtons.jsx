import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { usersDeleteSelected } from './Users/actions';

class AdminButtons extends Component {
  render() {
    let { onDeleteButtonClicked } = this.props;

    return (
      <div>
        <Link to='/admin/addUser'>
          <RaisedButton label="Nowy" className="admin-button"/>
        </Link>
        <RaisedButton label="Usuń" className="admin-button" onClick={ onDeleteButtonClicked }/>
        <RaisedButton label="Aktywuj" className="admin-button"/>
        <RaisedButton label="Dezaktywuj" className="admin-button"/>
      </div>
    )
  }
}

const mapStateToProps = () => {
  {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteButtonClicked: function () {
      dispatch(usersDeleteSelected());
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminButtons);
