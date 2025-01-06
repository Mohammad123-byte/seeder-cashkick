import React from 'react';
import CheckboxLabels, { CheckboxLabelsProps } from '.';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/CheckboxLabels',
  component: CheckboxLabels,
};

const Template: StoryFn<CheckboxLabelsProps> = (args) => (
  <CheckboxLabels {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};
