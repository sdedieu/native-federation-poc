import React from "react";
import { Redirect, Switch, BrowserRouter, Route, Link } from "react-router-dom";
import { ChildA } from "./child-a";
import { ChildB } from "./child-b";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/mfe-react/child-a">Child A</Link>
          <Link to="/mfe-react/child-b">Child B</Link>
        </ul>
        <Switch>
          <Route path="/mfe-react/child-a">
            <ChildA />
          </Route>
          <Route path="/mfe-react/child-b">
            <ChildB />
          </Route>
          <Redirect from="/" to="/mfe-react/child-a" />
          <Redirect from="/mfe-react" to="/mfe-react/child-a" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
