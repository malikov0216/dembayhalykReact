import React from 'react';
import Authorization from "./containers/Authorization/Authorization";
import {Route, Switch} from "react-router";
import Cabinet from "./containers/Cabinet/Cabinet";

function App() {
  return (
      <Switch>
          <Route path='/' exact component={Authorization}/>
          <Route path='/cabinet/:username/:password' component={Cabinet} />
      </Switch>
  );
}

export default App;
