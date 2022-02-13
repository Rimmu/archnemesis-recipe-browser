import { AppBar, Box, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '16px' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PoE Archnemesis Recipe Browser
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
