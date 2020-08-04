import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = (props) => {
  const { isLoggedIn } = useSelector(({ auth: { isLoggedIn } }) => ({
    isLoggedIn,
  }));
  const { component: Component, ...rest } = props;
  if (isLoggedIn) {
    return <Redirect to="/albums" />;
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};
export default PublicRoute;
