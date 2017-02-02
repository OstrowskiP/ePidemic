import { snackbarHide } from './actions';
import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { getIsOpen } from './selectors';
import { getMessage } from './selectors';

class SnackbarWrapper extends Component {
  render() {
    const { isOpened, message, snackbarHide } = this.props;

    return (
      <Snackbar
        open={ isOpened }
        message={ message }
        autoHideDuration={ 5000 }
        onRequestClose={ snackbarHide }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpened: getIsOpen(state),
    message: getMessage(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    snackbarHide: function () {
      dispatch(snackbarHide());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarWrapper);
