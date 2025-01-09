import { render, fireEvent } from '@testing-library/react';
import SeederLogo from '../../../../public/assests/icons/SeederLogo.svg';
import Icon from './index';

describe('Icon Test', () => {
  test('Icon should render', () => {
    render(<Icon src={SeederLogo} alt='Logo' />);
    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(SeederLogo);
  });

  test('Icon should have alt', () => {
    render(<Icon src={SeederLogo} alt='Logo' />);
    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.alt).toContain('Logo');
  });

  test('Icon should trigger onClick when clicked', () => {
    // Create a mock function to track if it's called
    const mockClickHandler = jest.fn();

    // Render the Icon with the mock onClick handler
    const { getByAltText } = render(
      <Icon src={SeederLogo} alt='Logo' clickHandler={mockClickHandler} />
    );

    // Find the image element by alt text and simulate a click event
    const displayedImage = getByAltText('Logo');
    fireEvent.click(displayedImage);

    // Check if the mockClickHandler function was called
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
