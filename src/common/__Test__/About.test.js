import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from '../About';

test('Conten from Home matches snapshot', () => {
  const content = render(<About />);
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText('About')).toBeInTheDocument();
});
