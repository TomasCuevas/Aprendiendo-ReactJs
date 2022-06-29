import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

import { setActiveNote } from '../../store/journal/journalSlice';

export const SidebarItem = ({ title, id, body, date, imageUrls }) => {
  const dispatch = useDispatch();

  const onActiveNote = () => {
    dispatch(setActiveNote({ title, id, body, date, imageUrls }));
  };

  return (
    <ListItem onClick={onActiveNote} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={title} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SidebarItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.number,
  imageUrls: PropTypes.array,
};
