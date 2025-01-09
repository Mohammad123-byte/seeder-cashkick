import React from 'react';
import { render, screen } from '@testing-library/react';
import AvtarIcon from '.';
import AvatarImage from '../../../../public/assests/icons/Avtar.svg';

describe('AvtarIcon Molecule', () => {
  it('should render the avatar icon with the correct src and alt attributes', () => {
    render(<AvtarIcon src={AvatarImage} alt='Profile Pic' />);
    const component = screen.getByAltText('Profile Pic');
    expect(component).toHaveAttribute('src', AvatarImage);
  });
});
export default {};
