import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H9FDQKZ7dJdoy7MHxwhuRjXPye75I1Tt0uir5wgMYKs0RxzVNwxozUAUw7fQHePmEzH0DNe0EWlpciqd5jJUW2500vhrjT7Ad';

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='Crown Store'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;