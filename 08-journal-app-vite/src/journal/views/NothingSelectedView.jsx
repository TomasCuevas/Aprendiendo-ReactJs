import { Grid, Typography } from "@mui/material"
import { StarOutline } from "@mui/icons-material"

export const NothingSelectedView = () => {

  return (
    <Grid
    container
    spacing={ 0 }
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'white' }}
    >
      <Grid item xs={ 12 }>
        <StarOutline sx={{ fontSize: 100, color: 'primary.main' }} />
      </Grid>
      <Grid item xs={ 12 }>
        <Typography color='primary.main' variant='h5'>Selecciona una nota</Typography>
      </Grid>
    </Grid>
  )
}