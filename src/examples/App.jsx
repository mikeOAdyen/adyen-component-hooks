import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './Header';
import { Dropin } from './adyen/Dropin';

const baseConfig = {
  countryCode: "US",
  amount: {
    currency: "USD",
    amount: 50
  },
  channel: "Web",
  shopperLocale: "en-US",
  returnUrl:"http://localhost:3000/checkout",
  reference: `reference${Math.floor(Math.random() * 10000000)}`
};

const App = () => {

  return (
    <div id="app">
      <Header />
      {/* <Route exact path='/' component={LandingPage} /> */}
      <Route exact path='/dropin' component={() => <Dropin baseConfig={baseConfig} />} />
      {/* <Route exact path='/components' component={() => <Components paymentMethodsReqBody={paymentMethodsReqBody} />} /> */}
    </div>
  )
};

export default withRouter(App)