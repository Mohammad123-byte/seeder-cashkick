import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';
import Logo from '../../../../public/assests/icons/SeederLogo.svg';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: { clickHandler: { action: 'clicked' } },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  render: () => <Icon src={Logo} alt='logo' />,
};

export const Secondary: Story = {
  args: {
    src: Logo,
    width: '44px',
    height: '44px',
  },
};

export const ClickableIcon: Story = {
  args: {
    src: Logo,
    width: '24px',
    height: '24px',
  },
};
