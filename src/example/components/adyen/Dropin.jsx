import React from 'react';
import { Checkout } from './Checkout';
import { useGetPaymentOpts } from '../../../hooks';

export const Dropin = ({ baseConfig }) => {
  const [ paymentMethods ] = useGetPaymentOpts(baseConfig);

  if (paymentMethods) {
    return <Checkout type="dropin" paymentMethods={paymentMethods} baseConfig={baseConfig} />
  }
  return <div></div>
};