import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { ORIGIN_KEY, USER_LOCALE, ENVIRONMENT } from '../config';
import { initiatePayment, getPaymentMethods, submitAdditionalDetails } from '../requests';

export const useCheckout = (loaded) => {
  const [result, setResult] = useState(null);
  const [checkout, setCheckout] = useState(null);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const onAdditionalDetails = async (state) => {
      console.log('on additional', state);
      setResult(await submitAdditionalDetails(state.data));
    };

    const onSubmit = async (state, checkout) => {
      if(state.isValid) {
        const result = await initiatePayment({...state.data, origin: window.location.origin});
        console.log(result);
        if (result.action) {
          Cookies.set('paymentData', result.action.paymentData);
          checkout.handleAction(result.action);
        }
        setCheckout(checkout);
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
      
    getPaymentMethodsAndInitialize();
  }, [loaded]);

  return [result, component, checkout];
};