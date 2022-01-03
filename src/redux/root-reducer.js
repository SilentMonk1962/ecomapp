import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import { persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; //this will  tell the browser that i want to use local storage to persis my state. We could also use session storage if needed. 
import shopReducer from './shop/shop.reducer';

const persistConfig ={
    key:'root',
    storage,
    whitelist:['cart'] //since firebase took care of user sessions, we decided to not persist them here
}
const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer)
//the root reducer helps us colate all the individual reducers (usres,cart etc) so that we don't
// end up maintaining our code in one big file which is hard to debug. 
