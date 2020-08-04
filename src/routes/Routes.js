import React from "react";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//Pages
import Home from "../pages/Home";
import Albums from "../pages/Albums";
import Album from "../pages/Album";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/home" component={Home} exact />
        <PrivateRoute path="/albums/:id" component={Album} />
        <PrivateRoute path="/albums" component={Albums} />
        <Redirect exact from="/" to="/albums" />
        <PrivateRoute path="/*" component={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
