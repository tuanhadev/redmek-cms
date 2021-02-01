import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import AuthRoute from "./util/AuthRoute";

import Login from "./views/Pages/Login";
import DefaultLayout from "./containers/DefaultLayout";

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <AuthRoute path="/" component={DefaultLayout} />
      </Switch>
    );
  }
}
