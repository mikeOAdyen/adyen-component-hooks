import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Header } from './Header';
import { Dropin } from './adyen/Dropin';
import { Success } from './adyen/Success';

const App = props => {
  const [success, setSuccess] = useState(null);
  console.log('app render');
    return (
      <div id="app">
        <Header />
        {/* <Route exact path='/' component={LandingPage} /> */}
        <Route path='/success' component={() => <Success {...props} setSuccess={setSuccess}/>} />
        <Route exact path='/dropin' component={() => <Dropin success={success}/>} />
        {/* <Route exact path='/components' component={() => <Components paymentMethodsReqBody={paymentMethodsReqBody} />} /> */}
      </div>
  )
};

export default withRouter(App)