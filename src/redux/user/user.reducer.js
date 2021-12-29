import {userActionTypes} from './user.types'

//We set an initial state because when React loads the DOM it should know that we have to set currentUser to some value. 
//if we don't do this then if redux updates the state via any action then this may not get updated. 
const INITIAL_STATE={
    currentUser:null
}

const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER: //thi is just syntactial sugar. we could have also pass the string 'SET_CURRENT_USER' but we want to avoid typos hence we referred it to a user.types.js file.
            return {
                ...state, //we are returning everything that was mentioned on the state
                currentUser: action.payload //here we are returning the object present in payload which will update the state property
            }
            default:
                return state; //since every reducer gets updated after every action, regardless of whether action was related to it or not, it is important that we return the default state of this component as if nothing happened. 
            
    }
}

export default userReducer;