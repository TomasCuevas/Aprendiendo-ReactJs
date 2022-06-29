import { useSelector } from 'react-redux';
import moment from 'moment';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';

import { ImageGalery } from '../components';
import { useForm } from '../../hooks/useForm';

export const NoteView = () => {
  const { active: note } = useSelector((state) => state.journal);

  const { title, body, date, onInputChange } = useForm(note);

  const dateFormat = moment(date).format('MMMM Do YYYY, h:mm:ss a');

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateFormat}
        </Typography>
      </Grid>
      <Grid item>
        <Button sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 35, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un titutlo'
          label='Titulo'
          name='title'
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>
      <Grid container>
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Que sucedio hoy?'
          name='body'
          value={body}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
          minRows={3}
        />
      </Grid>

      <ImageGalery />
    </Grid>
  );
};
