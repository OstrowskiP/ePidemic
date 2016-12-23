import Footer from './Footer/Footer';
import Header from './Header/Header';
import SnackbarWrapper from './Common/SnackBar/SnackbarWrapper';
import DialogWrapper from './Common/Dialog/DialogWrapper';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <content>
          { this.props.children }
        </content>
        <Footer />
        <SnackbarWrapper />
        <DialogWrapper />
      </div>
    )
  }
}

export default App;
