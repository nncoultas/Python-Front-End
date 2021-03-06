import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

const ROOT_URL = 'https://djorg-cs8.herokuapp.com';

export const GET_NOTES = 'GET_NOTES';
export const NOTE_ERROR = 'NOTE_ERROR';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};

export const noteError = error => {
  return {
    type: NOTE_ERROR,
    payload: error
  };
};

export const getNotes = () => {
  const token = localStorage.getItem('token');
  return dispatch => {
    axios
      .post(`${ROOT_URL}/api/notes`, { headers: { authorization: token } })
      .then(response => {
        dispatch({
          type: GET_NOTES,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(noteError('Failed to fetch notes'));
      });
  };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/signup`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED
        });
        history.push('/login');
      })
      .catch(() => {
        dispatch(authError('Failed to register user'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/api-token-auth/`, { username, password })
      .then(result => {
        dispatch({
          type: USER_AUTHENTICATED
        });
        localStorage.setItem('token', result.data.token);
        history.push('/');
      })
      .catch(() => {
        dispatch(authError('Incorrect username/password combo'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: USER_UNAUTHENTICATED });
  };
};
