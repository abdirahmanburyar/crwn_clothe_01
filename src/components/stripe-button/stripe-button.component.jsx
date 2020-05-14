import React from 'react'
import StripeReactCheckour from 'react-stripe-checkout'

 const StripeCheckout = ({ price }) => {
     const public_api_key = 'pk_test_y6aFZH6iWgo9m1eF0bQxguuM00LOQcVSiA'
     const priceForStripe = price * 100
     const onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }
    return (
        <StripeReactCheckour 
            label="Pay Now"
            name='CROWN CLOTHING LTD.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={public_api_key}
        />
    )
}
export default StripeCheckout