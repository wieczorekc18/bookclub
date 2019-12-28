import * as AuthUtil from "../util/users/util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: user
  };
};


const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const signup = user => dispatch =>
  AuthUtil.postUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
  );


export const login = user => dispatch =>
  AuthUtil.postSession(user).then(
    user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON))
  );


export const logout = () => dispatch => {
  // // debugger
  return AuthUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));
};
