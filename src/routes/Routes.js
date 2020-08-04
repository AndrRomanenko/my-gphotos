import React from "react";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//Pages
import Home from "../pages/Home";
import Albums from "../pages/Albums";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          path="/albums/:id"
          component={() => <div>Photo page</div>}
        />
        <PrivateRoute path="/albums" component={Albums} />
        <PublicRoute path="/home" component={Home} exact />
        <Redirect exact from="/" to="/albums" />
        <PrivateRoute path="/*" component={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
