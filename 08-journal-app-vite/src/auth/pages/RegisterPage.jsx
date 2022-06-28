import { Link as Routerlink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";

import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  const { formState, displayName, email, password, onInputChange } = useForm({
    displayName: "",
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout formTitle="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              onSubmit={onSubmit}
              variant="contained"
              fullWidth
            >
              Register
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
          <Link component={Routerlink} to="/auth/login">
            Iniciar Sesion
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
