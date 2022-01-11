import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layoud from "../containers/Layoud";
import { Login } from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layoud>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="recovery-password" component={RecoveryPassword} />
            <Route component={NotFound} />
          </Layoud>
        </Switch>
        <Layoud>
          <Login />
          <RecoveryPassword />
        </Layoud>
      </BrowserRouter>
    </>
  );
};

export { App };
