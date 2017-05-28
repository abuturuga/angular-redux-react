import {
  ADD_ONE,
  REMOVE_ONE} from '../actions/dummy-actions';


export default (state = 0, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state + 1;
    case REMOVE_ONE:
      return state - 1;
    default:
      return state;
  }
};
