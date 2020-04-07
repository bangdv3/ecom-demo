import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const pubkey= 'pk_test_TWtyBoechfN3L2hZuoonLDLP009dsq54TB'

const StripCheckOutBtn = ({price}) => {
  const priceForStripe  = price * 100 //x100 as cent based instead dollar
  const onToken = token => {
    console.log(token)
    alert('payment successful')
  }
  return (
    <StripeCheckout 
      label = 'Pay Now'
      panelLabel = 'Pay Now'
      amount = {priceForStripe}
      name = 'Ecom Site Demo'
      image='https://svgshare.com/i/CUz.svg' //logo merchant
      billingAddress
      shippingAddress
      description={`Total: $${price}`}  
      token = {onToken}   
      stripeKey = {pubkey}
    />
  );
}

export default StripCheckOutBtn;


