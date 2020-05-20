import { useState, useEffect } from 'react';
import { ORIGIN_KEY, USER_LOCALE, ENVIRONMENT } from '../config';
import { initiatePayment, getPaymentMethods, submitAdditionalDetails } from '../requests';

export const useCheckout = (loaded) => {
  const [paymentData, setPaymentData] = useState(null);
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {
    const onAdditionalDetails = async (state, component) => {
      const result = await submitAdditionalDetails(state.data);
      console.log('on additional', result);
    };

    const onSubmit = async (state, component) => {
      if(state.isValid) {
        const result = await initiatePayment({...state.data});
        console.log('submit result', result);
        setPaymentData(result.paymentData);
        return result.action
          ? await component.handleAction(result.action)
          : component;
      }
    };

    const getPaymentMethodsAndInitialize = async () => {
      const paymentMethodsResponse = await getPaymentMethods();
      if (paymentMethodsResponse && loaded) {
        const checkout = new window.AdyenCheckout({
          originKey: ORIGIN_KEY,
          locale: USER_LOCALE,
          environment: ENVIRONMENT,
          paymentMethodsResponse,
          onSubmit,
          onAdditionalDetails
        });
        setCheckout(checkout);
      }
    };
      
    getPaymentMethodsAndInitialize()
  }, [loaded]);

  return [paymentData, checkout];
};