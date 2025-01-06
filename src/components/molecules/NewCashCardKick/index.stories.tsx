import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NewCashCardKick, { CardProps } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/NewCashCardKick',
  component: NewCashCardKick,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<CardProps> = (args) => (
  <NewCashCardKick {...args} handleOnClick={action('button clicked')} />
);

export const Default = Template.bind({});
Default.args = {
  availableCash: 709546.0,
  width: '500px',
  height: 'auto',
  handleOnClick: action('default card clicked'),
};
