import React, { FC, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { RecipeNode } from '../../../types';
import { useStore } from '../../../store/store';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';

interface RecipeNodeListProps {
  nodes: RecipeNode[];
  filter: string;
}

export const RecipeNodeList: FC<RecipeNodeListProps> = ({ nodes, filter }) => {
  const { addSelectedNode, selectedNodes, removeSelectedNode, isNodeOwned } = useStore();

  const handleListItemClick = (_event: MouseEvent, node: RecipeNode) => {
    addSelectedNode(node);
  };

  const selectedIds = selectedNodes.map((selectedNode) => selectedNode.nodeId);

  const compareFn = (a: RecipeNode, b: RecipeNode): number => {
    return (
      +selectedIds.includes(b.nodeId) - +selectedIds.includes(a.nodeId) ||
      +b.isBasic - +a.isBasic ||
      a.name.localeCompare(b.name)
    );
  };

  const isNodeSelected = (node: RecipeNode): boolean =>
    selectedNodes.map((selectedNode) => selectedNode.nodeId).includes(node.nodeId);

  return (
    <Box sx={{ zIndex: '-1' }}>
      <List>
        {nodes
          .sort(compareFn)
          .filter(
            (node) =>
              node.name.toLowerCase().includes(filter.toLowerCase()) ||
              node.rewardType.includes(filter) ||
              node.rewardDesc?.toLowerCase().includes(filter.toLowerCase())
          )
          .map((node) => (
            <ListItem
              disablePadding
              key={node.nodeId}
              secondaryAction={
                isNodeSelected(node) && (
                  <IconButton size="small" onClick={() => removeSelectedNode(node.nodeId)}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                )
              }
            >
              <ListItemButton
                selected={isNodeSelected(node)}
                onClick={(e) => handleListItemClick(e, node)}
              >
                {isNodeOwned(node.nodeId) && (
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                )}
                <ListItemText>{node.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};
