import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthorizedRoute from './router/authorizedRoute'
import Login from './view/login'
import Home from './view/home'
import ManagerLayout from './components/layout/managerLayout'
import UserLayout from './components/layout/userLayout'
import ShowLayout from './components/layout/showLayout'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/index" component={Home} />
          <Redirect from="/" exact to="/index" />{/*注意redirect转向的地址要先定义好路由*/}
          <AuthorizedRoute path="/manager" component={ManagerLayout} />
          <AuthorizedRoute path="/user" component={UserLayout} />
          <AuthorizedRoute path="/show" component={ShowLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
