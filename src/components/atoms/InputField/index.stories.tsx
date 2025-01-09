import React from 'react';
import { InputField } from './index';
import { Meta, StoryObj } from '@storybook/react';
import theme from '../../../theme';

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: 'Atoms/InputField',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputField>;

const inputOnChangeFun = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event);
};

export const Default: Story = {
  args: {
    placeholder: 'Enter your name',
    variant: 'outlined',
    fontColor: theme.palette.primary.primaryTextLowEmp,
    onChangeFun: inputOnChangeFun,
    value: '',
    name: 'useName',
    type: 'text',
  },
};
