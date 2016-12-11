import { snackbarHide } from './actions';
import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

class SnackbarWrapper extends Component {
  render() {
    const { isOpened, message, snackbarHide } = this.props;

    return (
      <Snackbar
        open={ isOpened }
        message={ message }
        autoHideDuration={4000}
        onRequestClose={ snackbarHide }
      />
    );
  }
}

const mapStateToProps = ({ snackbar }) => {
  let { isOpened, message } = snackbar;

  return { isOpened, message };
};

const mapDispatchToProps = (dispatch) => {
  return {
    snackbarHide: function () {
      dispatch(snackbarHide());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarWrapper);
