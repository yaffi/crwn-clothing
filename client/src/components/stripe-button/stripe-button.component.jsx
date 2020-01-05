import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_G36Iz9St0xAasuTbWAwb609B00pgiMLZv0';

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token
          }
        }).then(response => {
          alert('payment sucsesss')
        }).catch(error => {
          console.log('Payment error: ', JSON.parse(error));
          alert('決済ができませんでした'); 
        })
    }

    return (
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    );
}

export default StripeCheckoutButton;