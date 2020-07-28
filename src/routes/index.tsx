import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../screens/Main';
import NewCostumer from '../screens/NewCostumer';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/newCostumer" exact component={NewCostumer} />
  </Switch>
);

export default Routes;
