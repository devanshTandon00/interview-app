import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchBar from "./SearchBar";
import UserDetails from "./Components/UserDetails";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route path="/:name" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
}
