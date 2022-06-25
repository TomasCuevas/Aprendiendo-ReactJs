import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, formTitle }) => {

  return (
    <Grid
      container
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid item
        className='box__shadow'
        xs={ 3 }
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { md: 500 } }}
      >
        <Typography variant='5' sx={{ mb: 1 }}>{ formTitle }</Typography>
        { children }
      </Grid>
    </Grid>
  )
}