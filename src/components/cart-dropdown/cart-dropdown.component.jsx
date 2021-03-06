import React from 'react';
import {connect} from 'react-redux';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import {useNavigate} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown= ({cartItems,dispatch}) => {
    let navigate =useNavigate();
    function handleClick(){
        navigate('/checkout');
    }
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length ? (
            cartItems.map(cartItem=>(
                <CartItem key ={cartItem.id} item={cartItem}/>
            ))
            ) : (
                <span className='empty-message'>Your cart is empty.Just like your wallet.</span>
            )
        
        }
        </div>
        <CustomButton
        onClick={()=>{handleClick();
        dispatch(toggleCartHidden())
        }
        }
        >GO TO CHECKOUT</CustomButton>
    </div>
)}


const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
});


export default connect(mapStateToProps)(CartDropdown);