export const getErrorMessage = state => state.authentication.errorMessage;
export const getIsAuthenticated = state => state.authentication.isAuthenticated;

export const getIsAdmin = state => {
  return state.authentication.role == 'admin';
};

export const getIsOperator = state => {
  return state.authentication.role == 'operator';
};

