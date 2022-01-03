import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

import {persistStore} from 'redux-persist'; //allows our browser to cache our Store now.

//middleware have a simple function, they take an action, execute their own code and then pass along that action to its reducer
//easiest example is the logger service we imported from redux-logger. it will simply console.log all actions (type and payload) after every state change
const middlewares =[logger];
//we use the ...middlewares which is a spread operator to apply entire array of middleware onto our store.
//here we instantiat a new store with built in redux method called createStore; it took everything from RootReducer and added it to our store
//the store object will be passed as a prop to our Provider as a prop in Index.js
 export const store =createStore(rootReducer,applyMiddleware(...middlewares));

 export const persistor = persistStore(store);

export default {store, persistor};
