import { useState, useEffect } from 'react';
import { getPaymentMethods } from '../requests';

export const useGetPaymentOpts = (reqData) => {
  const [paymentMethods, setPaymentMethods] = useState(null);
  
  useEffect(() => {
    const getPaymentOpts = async () => {
      try {
        const response = await getPaymentMethods(reqData);
        const paymentResponse = await response.json();
        setPaymentMethods(paymentResponse);
      } catch (err) {
        console.error('error retrieving payment options', err);
      }
    };

    if (reqData){
      getPaymentOpts();
    }
  }, [reqData]);

  return [paymentMethods];
};