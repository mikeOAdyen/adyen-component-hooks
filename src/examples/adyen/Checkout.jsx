import React from 'react';
import { useCheckout, useCheckoutScript } from '../../hooks';
import './Checkout.css';

export const Checkout = ({ type, config, payOpts, setResults }) => {
  const [ loaded ] = useCheckoutScript(config);
  const [ checkout, response ] = useCheckout(config, payOpts, loaded);
  
  if(checkout) {
    checkout.create(type).mount('#checkout');
  }

  if(response) {
    setResults(response);
  }

  return (
    <div id="checkout">
      <h3 id="rendered-result-title">Rendered Result</h3>
    </div>
  )
};