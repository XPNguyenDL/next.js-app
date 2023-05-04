import { combineReducers } from 'redux';
import cartStore from './CartStore'; 

const rootReducer = combineReducers({
  cart: cartStore,
});

export default rootReducer;