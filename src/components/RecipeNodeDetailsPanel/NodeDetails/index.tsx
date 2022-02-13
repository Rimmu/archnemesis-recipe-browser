import React, { FC, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { Recipe, RecipeNode } from '../../../types';
import { useStore } from '../../../store/store';
import { RecipeSection } from './RecipeSection';

interface NodeDetailsProps {
  recipeNode: RecipeNode;
  recipes: Recipe[] | null;
}

const styles = {
  container: {
    padding: '8px'
  },
  titleContainer: {
    display: 'flex',
    marginBottom: '8px'
  },
  title: {
    flex: '1 1 0'
  },
  rewardTypeWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '16px 0'
  },
  typography: {
    textAlign: 'center',
    padding: '16px 0'
  }
};

export const NodeDetails: FC<NodeDetailsProps> = ({ recipeNode, recipes }) => {
  const [isChecked, setChecked] = useState(false);
  const { name, monsterDesc, rewardDesc, rewardType, nodeId } = recipeNode;
  const {
    addOwnedNode,
    removeOwnedNode,
    isNodeOwned,
    getNodeById,
    getRecipeByName,
    getNodeByRecipeName,
    removeSelectedNode
  } = useStore();

  useEffect(() => {
    setChecked(isNodeOwned(nodeId));
  });

  const recipeCurrentNodeIsPartOf = recipes?.map((recipe) => getNodeByRecipeName(recipe.name));

  const recipeForCurrentNode = getRecipeByName(name)?.recipe.map((id) => getNodeById(id));

  const handleCheckboxClick = (): void => {
    if (isNodeOwned(nodeId)) {
      removeOwnedNode(nodeId);
    } else {
      addOwnedNode(recipeNode);
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card sx={styles.container}>
        <Box sx={styles.titleContainer}>
          <Checkbox checked={isChecked} onClick={() => handleCheckboxClick()} />
          <Typography variant="h4" align="center" sx={styles.title}>
            {name}
          </Typography>
          <IconButton onClick={() => removeSelectedNode(nodeId)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box>
          <Divider>MONSTER DESCRIPTION</Divider>
          <Typography variant="body2" sx={styles.typography}>
            {monsterDesc}
          </Typography>
        </Box>
        {rewardDesc && (
          <Box>
            <Divider>REWARD DESCRIPTION</Divider>
            <Typography variant="body2" sx={styles.typography}>
              {rewardDesc}
            </Typography>
          </Box>
        )}
        <Box>
          <Divider>REWARDS</Divider>
          <Box sx={styles.rewardTypeWrapper}>
            {rewardType.map((type, idx) => (
              <Chip key={idx} label={type} variant="outlined" />
            ))}
          </Box>
        </Box>
        {recipeForCurrentNode && (
          <RecipeSection
            sectionTitle="RECIPE"
            nodeList={recipeForCurrentNode}
            isOwned={isNodeOwned}
          />
        )}
        {recipeCurrentNodeIsPartOf && recipeCurrentNodeIsPartOf.length > 0 && (
          <RecipeSection sectionTitle="PART OF" nodeList={recipeCurrentNodeIsPartOf} />
        )}
      </Card>
    </Grid>
  );
};
