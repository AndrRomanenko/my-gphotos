import React from "react";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
// import { HomePage, AlbumsPage, PageNotFound, PhotosPage } from "../pages";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          path="/albums/:id"
          component={() => <div>Photo page</div>}
        />
        <PrivateRoute path="/albums" component={() => <div>Albums page</div>} />
        <PublicRoute path="/home" component={Home} exact />
        <Redirect exact from="/" to="/albums" />
        <PrivateRoute path="/*" component={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
