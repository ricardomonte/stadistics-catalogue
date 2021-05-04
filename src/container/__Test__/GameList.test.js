import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import configureStore from '../../configureStore';
import GameList from '../GameList';

test('GameList will be render', () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <GameList />
    </Provider>,
  );
});
