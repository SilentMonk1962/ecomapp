import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils';

//connect is a redux's higher order function which will help us connect with redux functionality on individual component. 
import {connect} from 'react-redux';


const Header = ({currentUser})=>(
    <div className='header'>
        <Link className ='logo-container'to="/">
        <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>CONTACT</Link>
        </div>
        <div className='options'>
            
            {
                //checks if current object is true, if yes, then displays SignOut else SignIn
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
                :
                <Link className='option' to='/signin'>SIGNIN</Link>
            }
        </div>

    </div>
);
//gets the value of the currentUser object from the state and then passes it as prop to the reducer
//the state here refers to the root-reducer
// you can name the function anything but it is a standard convention to call it mapStateToProps
// this mapStateToProps function is called in any component where we need to pass state values to the component. 

const mapStateToProps =state=>({
    currentUser:state.user.currentUser //pushes currentUser object into currentUser which is a prop here in header component
})

//the connect higher order function from redux took Header component and souped out a new Header component with Redux functionality.
//the first argument passed in connect function is the function that helps us access the state in our root-reducer. 
export default connect(mapStateToProps)(Header);