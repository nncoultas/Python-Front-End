import { GET_NOTES } from '../actions';

export const notesReducer = (notes = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    default:
      return notes;
  }
};

export default notesReducer;
