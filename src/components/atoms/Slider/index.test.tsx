import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from '.';
import '@testing-library/jest-dom';

test('renders the slider with the correct props', () => {
  const value = 50;
  const maxValue = 100;

  render(<Slider value={value} maxValue={maxValue} onChange={() => '0'} />);

  const sliderElement = screen.getByRole('slider');
  expect(sliderElement).toBeInTheDocument();

  expect(sliderElement).toHaveAttribute('aria-valuenow', String(value));
  expect(sliderElement).toHaveAttribute('aria-valuemax', String(maxValue));
});

test('calls onChange when the slider value changes', () => {
  const onChangeMock = jest.fn();
  const value = 50;
  const maxValue = 100;

  render(<Slider value={value} maxValue={maxValue} onChange={onChangeMock} />);

  const sliderElement = screen.getByRole('slider');

  // Simulate user interaction with the slider (e.g., change the value)
  fireEvent.change(sliderElement, { target: { value: 75 } });

  // Assert that the onChange handler was called with the correct value
  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(onChangeMock).toHaveBeenCalledWith(
    expect.objectContaining({ target: { value: '75' } })
  );
});
