import TextField from 'material-ui/TextField';
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {reduxForm} from "redux-form";
import {sendEmail} from "./actions";

class Contact extends Component {
    render() {
        const {
            fields: {
                emailSender,
                emailBody
            },
            handleSubmit,
            handleSubmitImpl
        } = this.props;

        const onSubmit = handleSubmit(handleSubmitImpl);

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <div className='contact-container'>
                        <div className="contact-form-container">
                            <div className='contact-title'>Masz pytania? Skontaktuj się z nami</div>
                            <div className='contact-form'>
                                <TextField
                                    {...emailSender}
                                    floatingLabelText="E-Mail"
                                    style={{
                                        width: '400px'
                                    }}
                                /><br />
                                <br />
                                <TextField
                                    {...emailBody}
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
                                    type='submit'
                                />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmitImpl: (values) => {
            dispatch(sendEmail(values));
        }
    }
};

export default reduxForm({
    form: 'contactForm',
    fields: [
        'emailSender',
        'emailBody'
    ]
}, null, mapDispatchToProps)(Contact);
