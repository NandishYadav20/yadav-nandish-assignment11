import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Codin 1 heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Codin 1/i);
  expect(headingElement).toBeInTheDocument();
});
