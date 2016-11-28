export const SNACKBAR_SHOW = 'SNACKBAR_SHOW';
export const SNACKBAR_HIDE = 'SNACKBAR_HIDE';

export const snackbarShow = (message) => {
  return {
    type: SNACKBAR_SHOW,
    message
  }
};

export const snackbarHide = () => {
  return {
    type: SNACKBAR_HIDE
  }
};
