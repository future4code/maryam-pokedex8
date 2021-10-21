import React from "react";
import { Router } from "./router/Router"
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalState from "./context/GlobalState";

const App = () => {
  return (
    <div>
      <GlobalState>
        <CssBaseline />
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
