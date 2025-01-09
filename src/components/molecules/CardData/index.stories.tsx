import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import CardData from '.';

const meta: Meta<typeof CardData> = {
  title: 'molecules/CardData',
  tags: ['autodocs'],
  component: CardData,
};

export default meta;

const Template: StoryFn<typeof CardData> = (args) => <CardData {...args} />;

export const Default = Template.bind({});
Default.args = {
  calenderHeading: '12 Months',
  downloadHeading: '$709.45K',
  percentageHeading: '12.00%',
};
