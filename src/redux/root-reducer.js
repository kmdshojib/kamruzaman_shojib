import { combineReducers } from 'redux';


import cartReducer from './cart-reducer/cart.reducer';

export default combineReducers({

  cart: cartReducer
});