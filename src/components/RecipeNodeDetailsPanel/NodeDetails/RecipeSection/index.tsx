import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Divider, Button } from '@mui/material';
import { RecipeNode } from '../../../../types';
import { useStore } from '../../../../store/store';

interface RecipeSectionProps {
  sectionTitle: string;
  isOwned?: (id: number) => boolean;
  nodeList: Array<RecipeNode | undefined>;
}

export const RecipeSection: FC<RecipeSectionProps> = ({ sectionTitle, nodeList, isOwned }) => {
  const { addSelectedNode } = useStore();
  const styles = {
    button: {
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '16px 0'
    }
  };

  return (
    <Box>
      <Divider>{sectionTitle}</Divider>
      <Box sx={styles.button}>
        {nodeList.map((recipe) => (
          <Button
            color={isOwned ? (isOwned(recipe!.nodeId) ? 'success' : 'primary') : 'primary'}
            onClick={() => addSelectedNode(recipe!)}
            key={recipe!.nodeId}
          >
            {recipe!.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
