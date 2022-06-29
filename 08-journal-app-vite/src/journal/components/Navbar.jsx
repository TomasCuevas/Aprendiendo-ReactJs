import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MenuOutlined, LogoutOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';

import { startLogout } from '../../store/auth/thunks';

export const Navbar = ({ drawerWidth }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color='inherit' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6' noWrap>
            {' '}
            Journal App{' '}
          </Typography>
          <IconButton color='error'>
            <LogoutOutlined onClick={onLogout} />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number,
};
