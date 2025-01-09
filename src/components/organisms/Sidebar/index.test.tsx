import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Sidebar', () => {
  it('should render all sidebar elements correctly', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    // Test for Seeder title
    const text1 = screen.getByText('Seeder');
    expect(text1).toBeInTheDocument();

    // Test for Home text
    const text2 = screen.getByText('Home');
    expect(text2).toBeInTheDocument();

    // Test for Cash Acceleration text
    const text3 = screen.getByText('Cash Acceleration');
    expect(text3).toBeInTheDocument();
  });
});
