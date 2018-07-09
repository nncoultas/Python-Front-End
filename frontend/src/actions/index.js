import axios from 'axios';
axios.defaults.withCredentials = true;

const ROOT_URL = 'https://djorg-cs8.herokuapp.com/api';

export const GET_NOTES = 'GET_NOTES';
export const NOTE_ERROR = 'NOTE_ERROR';

export const noteError = error => {
  return {
    type: NOTE_ERROR,
    payload: error
  };
};

export const getNotes = () => {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/notes`)
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
