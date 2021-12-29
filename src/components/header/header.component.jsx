import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils';
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
const mapStateToProps =({user:{currentUser},cart:{hidden}})=>({
    currentUser:currentUser,
    hidden:hidden

})
export default connect(mapStateToProps)(Header);