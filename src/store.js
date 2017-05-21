import {
  combineReducers,
  applyMiddleware,
  createStore,
  compose} from 'redux';
import thunk from 'redux-thunk';

function dummyReducer(state = 0, action) {
  return state;
}

const reducers = combineReducers({
  dummy: dummyReducer
});

const middleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducers, {}, middleware);
export default store;
