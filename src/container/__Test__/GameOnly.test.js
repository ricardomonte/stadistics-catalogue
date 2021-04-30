import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import configureStore from '../../configureStore';
import GameOnly from '../GameOnly';

test('GameOnly will be render', () => {
  const store = configureStore();
  render(
    <Provider store={store}>
      <GameOnly match={{ params: { id: 39034 } }} />
    </Provider>,
  );
});
