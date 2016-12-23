import { dialogHide } from './actions';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { getIsOpen } from './selectors';
import { getMessage } from './selectors';
import { getTitle } from './selectors';

class DialogWrapper extends Component {
  render() {
    const { isOpened, message, title, dialogHide } = this.props;
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={ dialogHide }
      />
    ];

    return (
      <Dialog
        title={ title }
        actions={ actions }
        modal={ false }
        open={ isOpened }
        onRequestClose={ dialogHide }
      >{ message }</Dialog>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpened: getIsOpen(state),
    message: getMessage(state),
    title: getTitle(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dialogHide: function () {
      dispatch(dialogHide());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogWrapper);
