import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { store } from '~/store';

import Auth from '~/pages/_layouts/Auth';
import Default from '~/pages/_layouts/Default';
import List from '~/pages/_layouts/List';
import Managing from '~/pages/_layouts/Managing';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  subRoute,
  principal,
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
  const SubLayout = principal ? List : Managing;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          {subRoute ? (
            <SubLayout>
              <Component {...props} />
            </SubLayout>
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
  principal: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  subRoute: false,
  principal: false,
};
