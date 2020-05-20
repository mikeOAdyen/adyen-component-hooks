import React, { useState, useEffect } from 'react';

export const Success = props => {
  const [payData, setPayData] = useState(null);

  const returnData = {};
  const returnQuery = props.location.search.replace(/\?/, '').split('&');
  returnQuery.forEach(query => {
    query = query.split('=');
    returnData[query[0]] = decodeURIComponent(query[1] || '');
  });

  console.log(returnData);

  return (
    <div>Success!</div>
  );
};