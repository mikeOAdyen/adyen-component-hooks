import React from 'react';
import { Checkout } from './Checkout';

export const Dropin = ({ success }) => {
  console.log('dropin render');
  return <div><Checkout type="dropin" success={success} /></div>
};