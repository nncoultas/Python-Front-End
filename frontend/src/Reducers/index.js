import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: FormReducer,
  notes: notesReducer
});

export default rootReducer;
