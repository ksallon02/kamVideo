import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";

const App = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  return !token ? (
    <Login setToken={setToken} />
  ) : (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Login setToken={setToken} /></Route>
        <Route exact path="/Dashboard" component={Dashboard}/>

        <Route component={NotFound} /> 
        {/* <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
