import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React, { ChangeEvent, FC, useState } from 'react';
import { Header } from './Header';
import { RecipeNodeDetailsPanel } from './RecipeNodeDetailsPanel';
import { RecipeNodeListPanel } from './RecipeNodeListPanel';
import { useStore } from '../store/store';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Footer } from './Footer';

export const App: FC = () => {
  const [filter, setFilter] = useState('');
  const { nodes, selectedNodes } = useStore();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.target.value);
  };

  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: `${matches ? 'column' : 'row'}`
    },
    input: {
      position: 'sticky',
      top: 0,
      zIndex: '1'
    },
    test: {
      backgroundColor: '#ffffff'
    }
  };

  return (
    <Box sx={{ height: '100%' }}>
      <Header />
      <Box sx={styles.appContainer}>
        <RecipeNodeListPanel filter={filter} nodes={nodes} isMobile={matches}>
          <TextField
            label="Search recipes"
            id="recipe-search"
            variant="filled"
            size="small"
            fullWidth
            value={filter}
            onChange={handleChange}
            sx={styles.input}
            InputProps={{ style: styles.test }}
          />
        </RecipeNodeListPanel>
        <Container>
          <RecipeNodeDetailsPanel recipeNodes={selectedNodes} />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};
