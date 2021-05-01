import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MockData from '../../../tools/MockData';
import Games from '../Games';

test('Content from Games component matches snapshot', () => {
  const content = render(
    <BrowserRouter>
      <Games game={MockData[0]} />
    </BrowserRouter>,
  );
  expect(content.container).toMatchSnapshot();
});
