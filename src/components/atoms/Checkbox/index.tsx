import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import theme from '../../../themes';
import { ThemeProvider } from '@mui/material';

export interface CheckboxLabelsProps {
  label: string;
  required?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
}

const CheckboxLabels = ({
  label,
  defaultChecked,
  disabled,
}: CheckboxLabelsProps) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={
          <Checkbox defaultChecked={defaultChecked} disabled={disabled} />
        }
        label={label}
      />
    </ThemeProvider>
  );
};

export default CheckboxLabels;
