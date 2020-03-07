import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { store } from '~/store';

import Auth from '~/pages/_layouts/Auth';
import Default from '~/pages/_layouts/Default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  layout: SubLayout,
  headerTab,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const dispatch = useDispatch();

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/orders" />;
  }

  const Layout = signed ? Default : Auth;

  dispatch({ type: `@selected${headerTab}` });

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <SubLayout>
            <Component {...props} />
          </SubLayout>
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  subRoute: PropTypes.bool,
  principal: PropTypes.bool,
  headerTab: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  subRoute: false,
  principal: false,
};
