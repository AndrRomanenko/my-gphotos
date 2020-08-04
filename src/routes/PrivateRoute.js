import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

const PrivateRoute = (props) => {
  const { isLoggedIn } = useSelector(({ auth: { isLoggedIn } }) => ({
    isLoggedIn,
  }));

  const { component: Component, ...rest } = props;
  if (!isLoggedIn) {
    return <Redirect exact from="/" to="/home" />;
  }
  return (
    <>
      {props.path !== "/*" && <Header />}
      <Route {...rest} render={(props) => <Component {...props} />} />
    </>
  );
};

export default PrivateRoute;
