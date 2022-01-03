import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe =price*100;
    const publishableKey ='pk_test_51KDfs8SEWEHdDCpQADPfs5aWCfE8lDUW2oGJKxwfk0U2YPT4E3kRbNjq18kPOtqXBIVM8vMcsYJ3tBXT9q0GTnTE00MvGpMUV0'
    const onToken =token =>{
        console.log (token);
        alert('Payment was successful');
    }
    return (
        <StripeCheckout
        label='Pay now'
        name ='Crwn Clothing Pvt Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton