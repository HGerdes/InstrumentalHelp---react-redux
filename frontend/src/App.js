import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Instruments from "./components/InstrumentPage"
import NewInstrument from "./components/CreateInstrumentPage"
import InstrumentDetailPage from "./components/instrumentDetail";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/instruments">
            <Instruments />
          </Route>
          <Route exact path="/instruments/new">
            <NewInstrument />
          </Route>
          <Route exact path="/instruments/:id">
            <InstrumentDetailPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
