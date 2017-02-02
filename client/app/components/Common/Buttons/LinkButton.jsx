import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class LinkButton extends Component {

  render() {
    const styles = {
      button: {
        margin: 10,
      }
    };

    return (
      <Link to={ this.props.to }>
        <RaisedButton
          label={ this.props.label }
          style={styles.button}
        />
      </Link>

    );
  }
}

export default LinkButton
