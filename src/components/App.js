import React from 'react';
import { Route } from 'react-router-dom';
import GameList from '../container/GameList';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={GameList} />
    </div>
  );
};

export default App;
