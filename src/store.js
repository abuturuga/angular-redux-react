import {
  combineReducers,
  applyMiddleware,
  createStore,
  compose} from 'redux';
import thunk from 'redux-thunk';
import dummyReducer from './reducers/dummy-reducer';
import fetchReducer from './reducers/fetch-reducer';


const reducers = combineReducers({
  dummy: dummyReducer,
  fetch: fetchReducer
});

const middleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducers, {}, middleware);
export default store;
