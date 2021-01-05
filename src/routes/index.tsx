import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ForgotMyPassword from '../pages/ForgotMyPassword';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />
      <Route path="/forgot-password" component={ForgotMyPassword} />
    </Switch>
  );
};

export default Routes;
