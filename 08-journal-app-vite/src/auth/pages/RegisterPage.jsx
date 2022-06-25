import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { Google } from "@mui/icons-material"
import { Link as Routerlink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {

  return (
    <AuthLayout formTitle='Register'>
      <form>

        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Nombre' type='text' placeholder='Nombre completo' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Correo' type='email' placeholder='correo@google.com' fullWidth />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField label='Contraseña' type='password' placeholder='contraseña' fullWidth />
          </Grid>
        </Grid>
        
        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={ 12 } sm={ 12 }>
            <Button variant='contained' fullWidth>
              Register
            </Button>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
          <Link component={ Routerlink } to='/auth/login'>
            Iniciar Sesion
          </Link>
        </Grid>

      </form>
    </AuthLayout>
  )
}