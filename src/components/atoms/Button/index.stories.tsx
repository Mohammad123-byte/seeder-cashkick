import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '.';
import theme from '../../../theme';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['text', 'contained', 'outlined'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'small', 'medium'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },
  },
  disabled: {
    control: { type: 'boolean' },
  },
  decorators: [(Story) => <Story />],
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'New Cash kick',
  variant: 'contained',
  size: 'large',
  sx: {
    backgroundColor: theme.palette.primary.primaryAlphaPurple500,
    width: 276,
    height: 59,
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'New Cash kick',
  variant: 'contained',
  size: 'large',
  sx: {
    backgroundColor: theme.palette.primary.primaryAlphaPurple500,
    width: 276,
    height: 59,
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
    opacity: 0.56,
  },
  disabled: true,
};
