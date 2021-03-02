import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryContaiener from "./component/Category/CategoryContaiener";
import Home from "./component/Home";
import Nav from "./component/Navigation/nav";

function App() {
  return (
    <div>
      
      <Router>
      <Nav />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/category">
            <CategoryContaiener />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
