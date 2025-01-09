import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text, { TypographyProps } from '.';

export default {
  title: 'Atoms/Typography',
  tags: ['autodocs'],
  component: Text,
  argTypes: {
    sx: { control: 'object' },
    variant: {
      control: 'select',
      options: [
        'title',
        'heading1',
        'heading2',
        'body1',
        'body2',
        'caption',
        'button',
      ],
    },
  },
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => <Text {...args} />;

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
  text: 'Title Text',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'heading1',
  text: 'Heading 1 Text',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'heading2',
  text: 'Heading 2 Text',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
  text: 'Body 1 Text',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
  text: 'Body 2 Text',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  text: 'Caption Text',
};

export const Button = Template.bind({});
Button.args = {
  variant: 'button',
  text: 'Button Text',
};
