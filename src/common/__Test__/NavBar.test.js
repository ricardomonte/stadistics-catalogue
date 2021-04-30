import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

test('Conten from Home matches snapshot', () => {
  const content = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText('fgtg')).toBeInTheDocument();
});
