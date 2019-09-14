import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Info from "./components/info";
import { Index } from "./components/ui";
import Menu from "./components/menu";

function BrowseRouter({ match, location }) {
  return (
    <Menu>
      <Browse location={location} />
    </Menu>
  );
}

function AdminRouter({ match, location }) {
  return (
    <Menu>
      <Admin location={location} />
    </Menu>
  );
}

function SigninRouter({ match, location }) {
  return (
    <Menu>
      <SignInScreen location={location} />
    </Menu>
  );
}

function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Index} />
      <Route
        exact
        path="/info/"
        component={() => (
          <Menu>
            <Info />
          </Menu>
        )}
      />
      <Route path="/browse" component={BrowseRouter} />
      <Route path="/admin" component={AdminRouter} />
      <Route path="/login" component={SigninRouter} />
      <Route path="/__/auth/handler" component={SigninRouter} />
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("ui"));
