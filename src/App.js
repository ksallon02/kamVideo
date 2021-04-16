import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import NotFound from "./components/notFound/NotFound";
import Profile from "./components/profile/Profile";

const App = () => {
  const [token, setToken] = useState(JSON.parse(sessionStorage.getItem("token")));

  const MainRutes = () => {
    return (    
      <BrowserRouter>
        <Switch>      
          <Route exact path="/"><Login setToken={setToken} /></Route>
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Dashboard" component={Dashboard}/>
          <Route exact path="/Profile"><Profile {...token} /></Route>
          <Route exact path="/Profile/:idProfile/Edit"><Profile {...token} /></Route>
  
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  const LoginRutes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Login setToken={setToken} /></Route>
          <Route exact path="/Register" component={Register} />
          <Route ><Login setToken={setToken} /></Route>
        </Switch>
      </BrowserRouter>    
    );
  }

  return (!token ? LoginRutes() : MainRutes());
};

export default App;
