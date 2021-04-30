import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MockData from '../../../tools/MockData';
import Games from '../Games';

test('Conten from Home matches snapshot', () => {
  const content = render(
    <BrowserRouter>
      <Games game={MockData[0]} />
    </BrowserRouter>,
  );
  expect(content.container).toMatchSnapshot();
});
