import React from 'react';
import { useCheckout, useCheckoutScript } from '../../../hooks';
import '../../styles/Checkout.css';

export const Checkout = ({ type, baseConfig, paymentMethods }) => {
  const [ loaded ] = useCheckoutScript(paymentMethods);
  const [ checkout ] = useCheckout(paymentMethods, baseConfig, loaded);
  
  if(checkout) {
    checkout.create(type).mount('#checkout');
  }

  return (
    <div id="checkout"></div>
  )
};