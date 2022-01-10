import React from "react";
import Layoud from "../containers/Layoud";
import { Login } from "../containers/Login";
import "../styles/global.css";

const App = () => {
  return (
    <>
      <Layoud>
        <Login />
      </Layoud>
    </>
  );
};

export { App };
