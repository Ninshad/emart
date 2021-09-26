import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import signupReducer from './signup.reducer';
import getProductsReducer from './product.reducers';



const rootReducer = combineReducers({
    auth: authReducer,
    signup: signupReducer,
    product: getProductsReducer
});

export default rootReducer;