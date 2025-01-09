import { render, screen } from '@testing-library/react';
import CheckboxLabel from '.';

import '@testing-library/jest-dom';

test('testing the checkbox', () => {
  render(<CheckboxLabel label={''} />);

  const checkboxElement = screen.getByRole('checkbox');
  expect(checkboxElement).toBeInTheDocument();
});
