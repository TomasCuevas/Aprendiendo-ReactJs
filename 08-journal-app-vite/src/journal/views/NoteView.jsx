import { Button, Grid, TextField, Typography } from "@mui/material"
import { SaveOutlined } from '@mui/icons-material'
import { ImageGalery } from "../components"

export const NoteView = () => {

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={ 39 } fontWeight='light'>28 agosto 2023</Typography>
      </Grid>
      <Grid item>
        <Button sx={{p: 2 }}>
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
          sx={{ border: 'none', mb: 1 }}
          minRows={ 3 }
        />
      </Grid>

      <ImageGalery />

    </Grid>
  )
}