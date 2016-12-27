import React, { Component } from 'react';
import Users from './Users/Users';
import { connect } from 'react-redux';
import { getCurrentUserRole } from '../Authentication/selectors';
import _ from 'lodash';
import { redirectTo } from '../Common/actions';
import { getIsCompleted } from '../Authentication/selectors';

class Admin extends Component {
  componentDidUpdate() {
    let { isAuthenticationCompleted } = this.props;

    if (isAuthenticationCompleted) {
      let { currentUserRole } = this.props;

      if (_.includes(this.props.route.roles, currentUserRole))
        return;

      redirectTo('not-found');
    }
  }

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

const mapStateToProps = (state) => {
  return {
    currentUserRole: getCurrentUserRole(state),
    isAuthenticationCompleted: getIsCompleted(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
