import React from 'react';
import { Checkout } from './Checkout';

export const Dropin = ({ success }) => {
  return <div><Checkout type="dropin" success={success} /></div>
};