import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";

import Routes from "./features/components/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
