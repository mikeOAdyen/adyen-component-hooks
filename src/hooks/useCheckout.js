import { useState, useEffect } from 'react';
import { makePaymentReq } from '../requests';

export const useCheckout = (config, paymentOpts, loaded) => {
  const [ checkout, setCheckout ] = useState(null);
  const [ response, setResponse ] = useState(null);

  const makeDetailsCall = details => {
    console.log('makeDetailsCall', details);
    return details;
  };

  const actionStep = action => {
    let actionItem;
    switch(action){
      case 'voucher':
        actionItem = '';
      case 'redirect':
        actionItem = '';
      case 'qrCode':
        actionItem = '';
      case 'sdk':
        actionItem = '';
      case 'threeDS2Fingerprint':
        actionItem = '';
      case 'threeDS2Challenge':
        actionItem = '';
      default:
        actionItem = null
    };

    return actionItem;
  }

  const checkForAction = async (res, checkout) => {
    const results = await res.json();
    if (results.action){
      return checkout.handleAction(results.action)
    }
    setResponse(results);
  };

  const makePayment = ({ paymentMethod }, { amount, merchantAccount, merchantReference: reference }) => {
    return makePaymentReq({
      amount,
      reference,
      paymentMethod,
      merchantAccount
    });
  };

  const onAdditionalDetails = async (details, checkout) => {
    try {
      const response = await makeDetailsCall(details.data);
      return await checkForAction(response, checkout);
    } catch (err) {
      throw Error(err);
    }
  };

  const onSubmit = async (state, checkout) => {
    try {
      const response = await makePayment(state.data, { ...paymentOpts });
      return await checkForAction(response, checkout);
    } catch (err) {
      throw Error(err);
    }
  };

  useEffect(() => {
    if (loaded) {
      const component = new window.AdyenCheckout({
        ...config,
        onSubmit,
        onAdditionalDetails
      });

      setCheckout(component);
    }
  }, [loaded]);

  return [checkout, response];
};