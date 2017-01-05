export const DIALOG_SHOW = 'DIALOG_SHOW';
export const DIALOG_HIDE = 'DIALOG_HIDE';

export const dialogShow = (message, title) => {
  return {
    type: DIALOG_SHOW,
    message,
    title
  }
};

export const dialogHide = () => {
  return {
    type: DIALOG_HIDE
  }
};
