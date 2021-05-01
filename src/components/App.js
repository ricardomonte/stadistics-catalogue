import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from '../common/NavBar';
import About from '../common/About';
import GameList from '../container/GameList';
import GameOnly from '../container/GameOnly';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <ToastContainer autoClose={3000} hideProgressBar />
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
