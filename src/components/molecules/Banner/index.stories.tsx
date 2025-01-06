/* eslint-disable import/no-duplicates */
import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BannerProps } from '.';
import Banner from '.';

const meta: Meta<typeof Banner> = {
  title: 'molecules/Banner',
  tags: ['autodocs'],
  component: Banner,
};

export default meta;
type Story = StoryObj<typeof Banner>;
const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const Primary: Story = {
  render: () => <Banner />,
};

export const OnClick = Template.bind({});
OnClick.args = {
  clickHandler: () => {
    action('Learn more clicked')('Button on Banner clicked');
  },
};
