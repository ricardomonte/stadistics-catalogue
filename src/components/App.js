import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../common/NavBar';
import About from '../common/About';
import GameList from '../container/GameList';
import GameOnly from '../container/GameOnly';

const App = () => (
  <>
    <NavBar />
    <div>
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/about" component={About} />
        <Route path="/game/:id" component={GameOnly} />
      </Switch>
    </div>
  </>
);

export default App;
