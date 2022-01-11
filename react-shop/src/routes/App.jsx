import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layoud } from "../containers/Layoud";
import { Home } from "../pages/Home";
import { Login } from "../containers/Login";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { NotFound } from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layoud>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/recovery-password" element={<RecoveryPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layoud>
      </BrowserRouter>
    </>
  );
};

export { App };
