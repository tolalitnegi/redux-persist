import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const combinedReducers =  combineReducers({
  user: userReducer,
  cart: cartReducer
});

const persistConfig = {
  key: 'root', // which part to persist entire state
  storage, // localStorage
  whitelist:["cart"] // only the reducers you want to persist no user which is auth
};


export default persistReducer(persistConfig, combinedReducers);