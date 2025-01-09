import React from 'react';
import CheckboxLabel, { CheckboxLabelsProps } from '.';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/Checkbox',
  component: CheckboxLabel,
};

const Template: StoryFn<CheckboxLabelsProps> = (args) => (
  <CheckboxLabel {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};
