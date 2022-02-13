import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { RecipeNode } from '../../types';

import styles from './index.module.css';
import { NoSelectedNode } from './NoSelectedNode';
import { NodeDetails } from './NodeDetails';
import { useStore } from '../../store/store';

interface RecipeNodeDetailsPanelProps {
  recipeNodes: Array<RecipeNode | null>;
}

export const RecipeNodeDetailsPanel: FC<RecipeNodeDetailsPanelProps> = ({ recipeNodes }) => {
  const { getRecipesByNodeId } = useStore();
  return (
    <Box className={styles.nodeDetailsWrapper}>
      {recipeNodes.length > 0 ? (
        <Grid container spacing={4}>
          {recipeNodes.map((node) => (
            <NodeDetails
              key={node!.nodeId}
              recipes={getRecipesByNodeId(node!.nodeId)}
              recipeNode={node!}
            />
          ))}
        </Grid>
      ) : (
        <Box>
          <NoSelectedNode />
        </Box>
      )}
    </Box>
  );
};
