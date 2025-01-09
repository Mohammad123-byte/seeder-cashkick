import React from 'react';
import Banner from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Banner component', () => {
  test('renders the celebration message', () => {
    render(<Banner />);

    // Use getByTestId to check the element is in the document
    const displayedText = screen.getByTestId('celebration-message');

    expect(displayedText).toBeInTheDocument();
  });
});
