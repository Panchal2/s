import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/crypto`}/>
    <Route path={`${match.url}/crm`} component={asyncComponent(() => import('./CRM/index'))}/>
    <Route path={`${match.url}/crypto`} component={asyncComponent(() => import('./Crypto/index'))}/>
    <Route path={`${match.url}/identities`} component={asyncComponent(() => import('./Crypto/identities'))}/>
    {/* <Route path={`${match.url}/visit`} component={asyncComponent(() => import('./Crypto/visit'))}/>
    <Route path={`${match.url}/employee-work-log`} component={asyncComponent(() => import('./Crypto/employee_work_log'))}/>
    <Route path={`${match.url}/procedure`} component={asyncComponent(() => import('./Crypto/procedure'))}/>
    <Route path={`${match.url}/expedient`} component={asyncComponent(() => import('./Crypto/expedient'))}/>
    <Route path={`${match.url}/inspection`} component={asyncComponent(() => import('./Crypto/inspection'))}/>
    <Route path={`${match.url}/document`} component={asyncComponent(() => import('./Crypto/document'))}/>
    <Route path={`${match.url}/reports`} component={asyncComponent(() => import('./Crypto/reports'))}/>
    <Route path={`${match.url}/help`} component={asyncComponent(() => import('./Crypto/help'))}/>

    <Route path={`${match.url}/addprofiler`} component={asyncComponent(() => import('./Crypto/Addprofiler'))}/>
    <Route path={`${match.url}/assessment`} component={asyncComponent(() => import('./Crypto/Assessment'))}/>
    <Route path={`${match.url}/staff`} component={asyncComponent(() => import('./Crypto/Staff'))}/>
    <Route path={`${match.url}/addstaff`} component={asyncComponent(() => import('./Crypto/Addstaff'))}/>
    <Route path={`${match.url}/role-permission`} component={asyncComponent(() => import('./Crypto/Role_Permission'))}/>
    <Route path={`${match.url}/listing`} component={asyncComponent(() => import('./Listing/index'))}/> */}
  </Switch>
);

export default Dashboard;
