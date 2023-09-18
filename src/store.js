import { combineReducers, createStore, applyMiddleware } from 'redux';
import { getallpizzasreducers } from './reducers/pizzareducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combineReducers({
  getallpizzasreducers: getallpizzasreducers,
});

const initialState = {};
const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;