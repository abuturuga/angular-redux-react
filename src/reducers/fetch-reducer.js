import {
  DUMMY_FETCH_START,
  DUMMY_FETCH_END,
  DUMMY_FETCH_ERROR} from '../actions/fetch-actions';

export default (state = {}, action) => {
  switch(action.type) {
    case DUMMY_FETCH_START:
      return Object.assign({}, state, {loading: true});
    case DUMMY_FETCH_END:
      return Object.assign({}, state, {loading: false}, action.payload);
    case DUMMY_FETCH_ERROR:
      return Object.assign({}, state, {loading: false, error: action.payload});
    default:
      return state;
  }
};
