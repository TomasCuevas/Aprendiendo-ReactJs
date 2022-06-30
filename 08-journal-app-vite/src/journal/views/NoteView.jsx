import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGalery } from '../components';
import { useForm } from '../../hooks/useForm';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startUpdateNote } from '../../store/journal/thunks';

export const NoteView = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);

  const { title, body, date, onInputChange, formState } = useForm(note);

  const dateFormat = moment(date).format('MMMM Do YYYY, h:mm:ss a');

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startUpdateNote(formState));
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;

    console.log('subiendo archivos');
    // dispatch(startuploadingFiles(target.files));
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateFormat}
        </Typography>
      </Grid>
      <Grid item>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button disabled={isSaving} onClick={onSaveNote} sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 35, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titutlo"
          label="Titulo"
          name="title"
          value={title}
          onChange={onInputChange}
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio hoy?"
          name="body"
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
