const { API_BASE_URL } = require('../config');

export const initiatePayment = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payments/initiatePayment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (err) {
    console.error('Failed to initiate payment', err);
  }
};

export const getPaymentMethods = async (data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/payments/getPaymentMethods`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (err) {
    console.error('Failed to get payment methods', err);
  }
};

export const submitAdditionalDetails = async (data) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/payments/submitAdditionalDetails`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      }
    );

    return await response.json();
  } catch (err) {
    console.error('Failed to get submit additional details', err);
  }
};

export const getAdyenConfig = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/payments/config`);
    return await response.json();
  } catch (err) {
    console.error('Failed to get config', err);
  }
};
