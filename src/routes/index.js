import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './RouteWrapper';

import Sign from '~/pages/Sign';
import Orders from '~/pages/Orders';
import Deliverymen from '~/pages/Deliverymen';
import DeliveryProblems from '~/pages/DeliveryProblems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route path="/problems" component={DeliveryProblems} isPrivate />
    </Switch>
  );
}
