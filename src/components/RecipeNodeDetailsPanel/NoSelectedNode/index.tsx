import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Paper';
import { List, ListItem, ListItemText } from '@mui/material';

export const NoSelectedNode: FC = () => {
  const styles = {
    container: {
      padding: '8px'
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h5">How does it work?</Typography>
      <Typography>Filter the node list by:</Typography>
      <List>
        <ListItem>
          <ListItemText>Node name, e.g. 'Innocence-touched'</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Reward type, e.g. 'map' will bring up nodes that contain a map in their loot table
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Additional reward info, e.g. 'rarest result' will bring up nodes that reroll rewards
            additional times
          </ListItemText>
        </ListItem>
      </List>
      <Typography>
        Having selected a node, you can easily see what recipes the node is a part of, or identify
        the nodes that constitute the node.
      </Typography>
      <br />
      <Typography>
        Finally, marking the checkbox will set the node as owned, which should help in identifying
        which parts of a recipe you already have.
      </Typography>
    </Box>
  );
};
