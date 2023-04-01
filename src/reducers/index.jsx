import { combineReducers } from 'redux';
import cartReducer from './CartStore'; 

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;