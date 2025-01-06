import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Slide, SliderProps } from '../Slider/index';

export default {
  title: 'atoms/Slider',
  component: Slide,
} as Meta;

const Template: StoryFn<SliderProps> = (args: SliderProps) => (
  <Slide {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: 50,
  maxValue: 100,
  onChange: (value: number) => `${value}%`,
  onSliderChange: (event: Event, newValue: number | number[]) => {
    console.log(newValue);
  },
};
