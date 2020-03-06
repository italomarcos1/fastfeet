import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './RouteWrapper';

import Sign from '~/pages/Sign';

import List from '~/pages/_layouts/List';
import Managing from '~/pages/_layouts/Managing';

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

      <Route
        path="/orders"
        layout={Managing}
        component={Orders}
        isPrivate
        exact
      />

      <Route
        path="/orders/register"
        layout={List}
        component={RegisterOrders}
        isPrivate
      />

      <Route
        path="/orders/edit"
        layout={List}
        component={EditOrders}
        isPrivate
      />

      <Route
        path="/deliverymen"
        exact
        layout={Managing}
        component={Deliverymen}
        isPrivate
      />

      <Route
        path="/deliverymen/register"
        component={RegisterDeliverymen}
        layout={List}
        isPrivate
      />
      <Route
        path="/deliverymen/edit"
        layout={List}
        component={EditDeliverymen}
        isPrivate
      />

      <Route
        path="/recipients"
        exact
        layout={Managing}
        component={Recipients}
        isPrivate
      />

      <Route
        path="/recipients/register"
        component={RegisterRecipients}
        layout={List}
        isPrivate
      />
      <Route
        path="/recipients/edit"
        layout={Managing}
        component={EditRecipient}
        isPrivate
      />

      <Route
        path="/problems"
        layout={List}
        component={DeliveryProblems}
        isPrivate
      />
    </Switch>
  );
}
