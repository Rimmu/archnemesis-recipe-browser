import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <Box sx={{ textAlign: 'center', margin: '16px 0', padding: '0 16px' }}>
      <Typography variant="caption" component="div">
        Got feedback? Hit me up on Discord - rimmu#5929 or Reddit -{' '}
        <Link href="https://www.reddit.com/user/Rimmu/">u/Rimmu</Link>
      </Typography>
    </Box>
  );
};
