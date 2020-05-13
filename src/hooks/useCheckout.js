import { useState, useEffect } from 'react';
import { ORIGIN_KEY, USER_LOCALE, ENVIRONMENT } from '../config';
import { initiatePayment, submitAdditionalDetails } from '../requests';

export const useCheckout = (paymentMethodsResponse, baseConfig, loaded) => {
  const [checkout, setCheckout] = useState(null);

  useEffect(() => {

    const onAdditionalDetails = async (state, component) => {
      const response = await submitAdditionalDetails(state.data);
      const result = await response.json();
      console.log(result);
    };

    const onSubmit = async (state, component) => {
      const response = await initiatePayment({...state.data, ...baseConfig});
      const result = await response.json();
      console.log(result);
    };

    if (loaded) {
      const component = new window.AdyenCheckout({
        originKey: ORIGIN_KEY,
        locale: USER_LOCALE,
        environment: ENVIRONMENT,
        paymentMethodsResponse,
        onSubmit,
        onAdditionalDetails
      });
      setCheckout(component);
    }

  }, [paymentMethodsResponse, loaded, baseConfig]);

  return [checkout];
};