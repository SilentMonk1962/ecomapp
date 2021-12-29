import {userActionTypes} from './user.types'

//here the user prop can be anything that the component wants to pass to us. in our case firebase will pass userauth or via snapshot which will contain displayName, email and fullName of an individual
//the type should be same as mentioned in the switch system of userReducer else it will not catch it
//the payload right now is the entire object. We can specify new values if required. 

//this setCurrentUser function will be used as an action on our App component. 

export const setCurrentUser = user =>({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});