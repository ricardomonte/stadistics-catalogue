import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GameList from '../container/GameList';
import GameOnly from '../container/GameOnly';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={GameList} />
      <Route path="/game/:slug" component={GameOnly} />
    </Switch>
  </div>
);

export default App;
