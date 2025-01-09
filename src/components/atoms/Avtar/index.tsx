import { Avatar as MuiAvatar } from '@mui/material';
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Avatar = ({ height, width, ...props }: AvatarProps) => {
  return (
    <MuiAvatar
      style={{ borderRadius: '12px' }}
      variant='circular'
      {...props}
      sx={{ height, width }}
    />
  );
};

export default Avatar;
