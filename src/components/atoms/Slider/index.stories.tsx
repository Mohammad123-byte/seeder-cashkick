import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Slider, SliderProps } from '../Slider/index';

export default {
  title: 'Atoms/Slider',
  component: Slider,
} as Meta;

const Template: StoryFn<SliderProps> = (args: SliderProps) => (
  <Slider {...args} />
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
