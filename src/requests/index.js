const { API_BASE_URL } = require('../config');

export const initiatePayment = async data => {
  try {
    return await fetch(`${API_BASE_URL}/api/initiatePayment`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
  } catch (err) {
    console.error('Failed to initiate payment', err);
  }
};

export const getPaymentMethods = async data => {
  try {
    return await fetch(`${API_BASE_URL}/api/getPaymentMethods`, {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    console.error('Failed to get payment methods', err);
  }
}

export const submitAdditionalDetails = async data => {
  try {
    return await fetch(`${API_BASE_URL}/api/submitAdditionalDetails`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    console.error('Failed to get submit additional details', err);
  }
};

export const getAdyenConfig = async () => {
  try {
    return await fetch(`${API_BASE_URL}/api/config`);
  } catch (err) {
    console.error('Failed to get config', err);
  }
};