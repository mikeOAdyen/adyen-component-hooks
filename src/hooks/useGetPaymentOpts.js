import { useState, useEffect } from 'react';
import { getPaymentMethods } from '../requests';

export const useGetPaymentOpts = (reqData) => {
  const [paymentMethods, setPaymentMethods] = useState(null);
  
  useEffect(() => {
    const getPaymentOpts = async () => {
      try {
        const paymentResponse = await getPaymentMethods(reqData);
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