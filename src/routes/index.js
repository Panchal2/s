import React from "react";
import {Route, Switch} from "react-router-dom";

import Components from "./components/index";
import CustomViews from "./customViews/index";
import Extensions from "./extensions/index";
import ExtraComponents from "./extraComponents/index";


import Main from "./main/index";

import asyncComponent from "util/asyncComponent";
const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}main`} component={Main}/>
      <Route path={`${match.url}components`} component={Components}/>
      <Route path={`${match.url}custom-views`} component={CustomViews}/>
      <Route path={`${match.url}extensions`} component={Extensions}/>
      <Route path={`${match.url}extra-components`} component={ExtraComponents}/>
      
     
      
      <Route path={`${match.url}/forgot-password`} component={asyncComponent(() => import('../containers/forgot-password'))}/>
    </Switch>
  </div>
);

export default App;
