// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Avtar from '.';
import avatarImage from '../../../../public/assests/icons/Avtar.svg';

const meta: Meta<typeof Avtar> = {
  title: 'Molecules/AvtarWithDropdown',
  component: Avtar,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Avtar>;

export const AvtarWithPic: Story = {
  args: {
    src: avatarImage,
    alt: 'Avtar Photo',
  },
};

export const AvtarWithOutPic: Story = {
  args: {
    alt: 'Avtar Photo',
  },
};

export default meta;
