import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {thunk} from "redux-thunk";
import authReducer from './Auth/Reducers';
import customerProductReducer from './Product/Reducer';
import cartReducer from './Cart/Reducer';
import { orderReducer } from './Order/Reducer';
import ReviewReducer from './Review/Reducer';



const rootReducers = combineReducers({
    auth : authReducer,
    product : customerProductReducer,
    cart : cartReducer,
    order : orderReducer,
    review : ReviewReducer

})

export const store = legacy_createStore(rootReducers , applyMiddleware(thunk))