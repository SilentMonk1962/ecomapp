import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user:userReducer
});


//the root reducer helps us colate all the individual reducers (usres,cart etc) so that we don't
// end up maintaining our code in one big file which is hard to debug. 
