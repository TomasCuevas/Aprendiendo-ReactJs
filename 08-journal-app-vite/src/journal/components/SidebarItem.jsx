import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

import { setActiveNote } from '../../store/journal/journalSlice';

// eslint-disable-next-line react/prop-types
export const SidebarItem = ({ title = '', id, body = '', date, imageUrls }) => {
  const dispatch = useDispatch();
  const newTitle = useMemo(() => {
    return title.length > 30 ? title.slice(0, 30) + '...' : title;
  }, [title]);
  const newBody = useMemo(() => {
    return body.length > 60 ? body.slice(0, 60) + '...' : body;
  }, [body]);

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
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
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
};
