import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
