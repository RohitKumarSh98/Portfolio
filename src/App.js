import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/NavigationBar/Navigation";
import HomePage from "./pages/HomePage";
import SkillPage from "./pages/SkillPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/skills">
          <SkillPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
