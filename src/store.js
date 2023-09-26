import { combineReducers, createStore, applyMiddleware } from 'redux';
import { getallpizzasreducers } from './reducers/pizzareducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartreducer } from './reducers/cartreducer';

// Combine your reducers, using 'getallpizzasreducers' as the key
const finalReducer = combineReducers({
  getallpizzasreducers: getallpizzasreducers,
  cartreducer: cartreducer
});

// Retrieve cart items from local storage
const cartitems = localStorage.getItem('cartitems')
  ? JSON.parse(localStorage.getItem('cartitems'))
  : [];

const initialState = {
  cartreducer: {
    cartitems: cartitems
  }
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
