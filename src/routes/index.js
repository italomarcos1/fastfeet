import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './RouteWrapper';

import Sign from '~/pages/Sign';

import Orders from '~/pages/Orders';
import RegisterOrders from '~/pages/Orders/Register';
import EditOrders from '~/pages/Orders/Edit';

import Deliverymen from '~/pages/Deliverymen';
import EditDeliverymen from '~/pages/Deliverymen/Edit';
import RegisterDeliverymen from '~/pages/Deliverymen/Register';

import Recipients from '~/pages/Recipients';
import RegisterRecipients from '~/pages/Recipients/Register';
import EditRecipient from '~/pages/Recipients/Edit';

import DeliveryProblems from '~/pages/DeliveryProblems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/deliverymen" component={Deliverymen} isPrivate />
      <Route
        path="/registerDeliverymen"
        component={RegisterDeliverymen}
        subRoute
        isPrivate
      />
      <Route
        path="/editDeliverymen"
        subRoute
        component={EditDeliverymen}
        isPrivate
      />
      <Route path="/editOrders" subRoute component={EditOrders} isPrivate />
      <Route
        path="/editRecipient"
        subRoute
        component={EditRecipient}
        isPrivate
      />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route
        path="/registerRecipients"
        component={RegisterRecipients}
        subRoute
        isPrivate
      />
      <Route
        path="/registerOrders"
        component={RegisterOrders}
        subRoute
        isPrivate
      />
      <Route path="/problems" component={DeliveryProblems} isPrivate />
    </Switch>
  );
}
