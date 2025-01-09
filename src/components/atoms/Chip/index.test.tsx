import { render, screen } from '@testing-library/react';
import { Chip } from '.';
import '@testing-library/jest-dom';

describe('TextChip', () => {
  test('renders label text', () => {
    const labelText = 'Sample Chip';
    render(<Chip label={labelText} />);

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    render(<Chip label='Clickable Chip' onClick={onClickMock} />);

    const chipElement = screen.getByText('Clickable Chip');
    chipElement.click();

    expect(onClickMock).toHaveBeenCalled();
  });
});
