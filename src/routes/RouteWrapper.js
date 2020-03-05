import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { store } from '~/store';

import Auth from '~/pages/_layouts/Auth';
import Default from '~/pages/_layouts/Default';
import List from '~/pages/_layouts/List';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  subRoute,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/orders" />;
  }

  const Layout = signed ? Default : Auth;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          {subRoute ? (
            <List>
              <Component {...props} />
            </List>
          ) : (
            <Component {...props} />
          )}
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  subRoute: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  subRoute: false,
};
