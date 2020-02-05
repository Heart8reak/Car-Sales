import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import carSaleReducer from './carSalesReducer';
import storeReducer from './storeReducer';

export default combineReducers({ priceReducer, carSaleReducer, storeReducer });
