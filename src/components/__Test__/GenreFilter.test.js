import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MockData from '../../../tools/MockData';
import GenreFilter from '../GenreFilter';

test('Content from GenreFilter matches snapshot', () => {
  const content = render(
    <GenreFilter filter={MockData[0].genre} onGameChange={jest.fn()} />,
  );
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText('Filter:')).toBeInTheDocument();
});
