import {
  combineReducers,
  applyMiddleware,
  createStore,
  compose} from 'redux';
import thunk from 'redux-thunk';


const reducers = combineReducers({});

const middleware = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducers, {}, middleware);
export default store;
