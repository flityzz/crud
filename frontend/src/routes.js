
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/main';
import Update from './pages/update';
import List from './pages/list';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/post" component={Login} />
            <Route path="/update/:_id" component={Update} />
            <Route path="/list" component={List} />
        </Switch>
    </BrowserRouter>
  );
}
