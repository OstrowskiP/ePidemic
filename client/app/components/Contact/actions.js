import {contactNodeClient} from '../../core/index';
import {snackbarShow} from '../Common/SnackBar/actions';

export const sendEmail = (emailDetails) => {
    return dispatch => {
        contactNodeClient.sendEmail(emailDetails)
            .then((result) => {
                if (result.success)
                    dispatch(snackbarShow(result.message));
            })
            .catch((error) => console.error(error));
    }
};
