import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {
  return (<div>
      <div className='contact-container'>
        <div className="contact-form-container">
          <div className='contact-title'>Masz pytania? Skontaktuj się z nami</div>
          <div className='contact-form'>
            <TextField
              floatingLabelText="E-Mail"
              style={{
                width: '400px'
              }}
            /><br />
            <br />
            <TextField
              floatingLabelText="Wiadomość"
              multiLine={true}
              rows={3}
              style={{
                width: '400px'
              }}
            /><br />
            <RaisedButton
              label='Wyślij'
              primary={ true }
              style={{
                width: '400px'
              }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
