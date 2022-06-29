import PropTypes from 'prop-types';

import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SidebarItem = ({ note }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={note.title} />
          <ListItemText secondary={note.body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SidebarItem.propTypes = {
  note: PropTypes.object,
};
