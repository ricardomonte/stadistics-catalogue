import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MockData from '../../../tools/MockData';
import Heroe from '../Heroe';

test('Conten from Home matches snapshot', () => {
  const content = render(<Heroe image={MockData} />);
  expect(content.container).toMatchSnapshot();
});
