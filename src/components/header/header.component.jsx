import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

//connect is a redux's higher order function which will help us connect with redux functionality on individual component. 
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser,hidden})=>(
    <div className='header'>
        <Link className ='logo-container'to="/">
        <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                //checks if current object is true, if yes, then displays SignOut else SignIn
                currentUser ?
                <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
                :
                <Link className='option' to='/signin'>SIGNIN</Link>
            }
            <CartIcon/>
            {hidden? null :<CartDropdown/>}
        </div>

    </div>
);
//gets the value of the currentUser object from the state and then passes it as prop to the reducer
const mapStateToProps =createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden

})

//the connect higher order function from redux took Header component and souped out a new Header component with Redux functionality.
//the first argument passed in connect function is the function that helps us access the state in our root-reducer. 
export default connect(mapStateToProps)(Header);