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
import EditInstrumentForm from "./components/EditInstrumentPage";
import DeleteInstrument from "./components/DeleteInstrumentPage";
import CreateReviewForm from "./components/CreateReviewPage";
import SingleReviewPage from "./components/SingleReviewPage";
import EditReviewForm from "./components/EditReviewPage";

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
          <Route exact path="/instruments/:id/edit">
            <EditInstrumentForm />
          </Route>
          <Route exact path="/instruments/:id/delete">
            <DeleteInstrument />
          </Route>
          <Route exact path="/reviews/:id/new">
            <CreateReviewForm />
          </Route>
          <Route exact path="/reviews/:id/edit">
            <EditReviewForm />
          </Route>
          <Route exact path="/reviews/:id">
            <SingleReviewPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
