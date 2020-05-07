import React from 'react';
import { useGetPaymentOpts } from '../../hooks';

const requestBody = {
  
}

export const Dropin = () => {
  const [ paymentMethods ] = useGetPaymentOpts();
};