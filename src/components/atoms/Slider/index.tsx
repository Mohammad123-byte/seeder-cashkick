import React from 'react';
import { Slider as MuiSlider } from '@mui/material';
import theme from '../../../theme';

export interface SliderProps {
  onChange?: (value: number) => string;
  value: number;
  maxValue: number;
  onSliderChange?: (event: Event, newValue: number | number[]) => void;
}

export const Slider = ({
  value,
  maxValue,
  onChange,
  onSliderChange, // Updated prop name
}: SliderProps) => {
  return (
    <MuiSlider
      value={value}
      defaultValue={0.0}
      getAriaValueText={onChange}
      max={maxValue}
      onChange={onSliderChange} // Updated prop usage
      step={1}
      sx={{
        width: 300,
        color: theme.palette.primary.primaryAlphaPurple500,
        '& .MuiSlider-thumb': {
          borderRadius: '8px',
        },
      }}
    />
  );
};
