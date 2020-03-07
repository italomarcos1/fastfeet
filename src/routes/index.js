import React from 'react';
import { Route as TRoute, Switch } from 'react-router-dom';

import Route from './RouteWrapper';

import Sign from '~/pages/Sign';

import List from '~/pages/_layouts/List';
import Managing from '~/pages/_layouts/Managing';

import Orders from '~/pages/Orders';
import RegisterOrders from '~/pages/Orders/Register';
import EditOrders from '~/pages/Orders/Edit';
import DetailsOrders from '~/pages/Orders/View';

import Deliverymen from '~/pages/Deliverymen';
import EditDeliverymen from '~/pages/Deliverymen/Edit';
import RegisterDeliverymen from '~/pages/Deliverymen/Register';

import Recipients from '~/pages/Recipients';
import RegisterRecipients from '~/pages/Recipients/Register';
import EditRecipient from '~/pages/Recipients/Edit';

import DeliveryProblems from '~/pages/DeliveryProblems';

export default function Routes() {
  // criar reducer de array. criar uma action que ativa ESSE e zera os outros.
  return (
    <Switch>
      <Route path="/" exact component={Sign} />

      <Route
        path="/orders"
        layout={Managing}
        component={Orders}
        isPrivate
        headerTab="/orders"
        exact
      />
      <TRoute path="/orders/details" component={DetailsOrders} />

      <Route
        path="/orders/register"
        layout={List}
        component={RegisterOrders}
        headerTab="/orders"
        isPrivate
      />

      <Route
        path="/orders/edit"
        layout={List}
        component={EditOrders}
        headerTab="/orders"
        isPrivate
      />

      <Route
        path="/deliverymen"
        exact
        layout={Managing}
        component={Deliverymen}
        headerTab="/deliverymen"
        isPrivate
      />

      <Route
        path="/deliverymen/register"
        component={RegisterDeliverymen}
        layout={List}
        headerTab="/deliverymen"
        isPrivate
      />
      <Route
        path="/deliverymen/edit"
        layout={List}
        component={EditDeliverymen}
        headerTab="/deliverymen"
        isPrivate
      />

      <Route
        path="/recipients"
        exact
        layout={Managing}
        component={Recipients}
        headerTab="/recipients"
        isPrivate
      />

      <Route
        path="/recipients/register"
        component={RegisterRecipients}
        headerTab="/recipients"
        layout={List}
        isPrivate
      />
      <Route
        path="/recipients/edit"
        layout={Managing}
        component={EditRecipient}
        headerTab="/recipients"
        isPrivate
      />

      <Route
        path="/problems"
        layout={List}
        component={DeliveryProblems}
        headerTab="/problems"
        isPrivate
      />
    </Switch>
  );
}
