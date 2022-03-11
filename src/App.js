import React from "react";
import Tadd from "./todo/Tadd";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AList from "./todocontext/AList";
import Edit from "./todocontext/Edit";
import Navbar from "./todoapi/Navbar";
import Home from "./todoapi/Home";
import Contact from "./todoapi/Viewuser";
import Add from "./todoapi/Add";
import Edituser from "./todoapi/Edituser";
import Viewuser from "./todoapi/Viewuser";
import User from "./pagination/User";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={Add} />
          <Route exact path="/users/:id" component={Edituser} />
          <Route exact path="/view/:id" component={Viewuser} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
