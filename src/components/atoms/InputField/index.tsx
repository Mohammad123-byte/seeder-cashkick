import { TextField } from '@mui/material';
import React from 'react';
import theme from '../../../themes';

interface InputFieldProps {
  variant?: 'filled' | 'outlined' | 'standard';
  label?: string;
  placeholder: string;
  fontColor?: string;
  onChangeFun: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  type: string; // Changed `any` to `string` for better type safety
}

export const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    variant = 'filled',
    label = '',
    fontColor = 'black',
    placeholder,
    onChangeFun,
    value,
    name,
    type,
  } = props;

  return (
    <TextField
      variant={variant}
      placeholder={placeholder}
      label={label}
      fullWidth
      onChange={onChangeFun}
      value={value}
      name={name}
      type={type}
      sx={{
        backgroundColor: theme.palette.border.borderHighEmp,
        input: { color: fontColor },
        '& fieldset': { border: 'none' },
        borderRadius: '12px',
      }}
    />
  );
};
