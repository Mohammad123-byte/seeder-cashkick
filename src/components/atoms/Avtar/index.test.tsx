import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '.';

describe('Testing Avtar Atom', () => {
  it('should render the Avatar component properly', async () => {
    const url = '/assets/icons/avatar.svg';
    render(<Avatar alt='Profile Pic' src={url} />);
    const component = screen.getByAltText('Profile Pic');
    expect(component.getAttribute('src')).toBe(url);
  });
});
