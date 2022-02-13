import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { RecipeNode } from '../../types';
import { RecipeNodeList } from './RecipeNodeList';

interface RecipeNodeListPanelProps {
  nodes: RecipeNode[];
  filter: string;
  isMobile: boolean;
}

export const RecipeNodeListPanel: FC<RecipeNodeListPanelProps> = ({
  nodes,
  filter,
  children,
  isMobile
}) => {
  const styles = {
    recipeNodeListPanel: {
      width: `${isMobile ? '100%' : '20%'}`,
      height: `${isMobile ? '270px' : '600px'}`,
      overflow: 'auto',
      marginBottom: `${isMobile ? '32px' : null}`,
      border: `${isMobile ? '1px solid rgb(220,220,220)' : null}`
    }
  };
  return (
    <Box sx={styles.recipeNodeListPanel}>
      {children}
      <RecipeNodeList filter={filter} nodes={nodes as RecipeNode[]} />
    </Box>
  );
};
