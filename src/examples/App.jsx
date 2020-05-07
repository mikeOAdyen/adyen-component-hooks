import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './Header';

const App = () => {

  return (
    <div id="app">
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/dropin' component={Dropin} />
      <Route exact path='/components' component={Components} />
    </div>
  )
};

export default withRouter(App)