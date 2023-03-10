import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "../../model/axios";

//components
import PersonalForm from "../../components/AllForms/PersonalFroms";

const ENDPOINT = '/plug_mood/check-email'
const theme = createTheme();

export default function RegisterPage({handleLogin}) {
  const [next, setNext] = useState();
  const [formData, setFormData] = useState({});
  const [validatePwd, setValidatePwd] = useState(false);
  const [validateEmail, setValidateEmail] = useState(false);
  const [errmsg, setErrMsg] = useState('')
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const pwd = data.get('pass')
    const conPwd = data.get('conPass')
    const email = data.get('email')
    const response = await axios.post(ENDPOINT,{"email" : email})
    console.log(event.preventDefault())
    console.log(response.data.status)
    if(pwd === conPwd){
      console.log(response.data.status)
      if(response?.status === 200 && response?.data.status === true){
        setValidateEmail(true)
        setErrMsg('Your Email it already registered.')
      }else if(response.data.status === false){
        setNext('show')
        setValidateEmail(false)
        setValidatePwd(false)
      }
    }else{
      setValidatePwd(true)
      setErrMsg('Password and re-password is not match. Pleae try again')
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {next === "show" ? (
          <PersonalForm
            formData={formData}
            handleLogin={handleLogin}
          />
        ) : (
            <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            >
            <Typography component="h1" variant="h5">
              Create account
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    error={validateEmail}
                    helperText={validateEmail && (errmsg)}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    error={validatePwd}
                    helperText={validatePwd && (errmsg)}
                    id="pass"
                    label="Password"
                    type="password"
                    name="pass"
                    autoComplete="password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    error={validatePwd}
                    helperText={validatePwd && (errmsg)}
                    name="conPass"
                    label="Confirm Password"
                    type="password"
                    id="conPass"
                    autoComplete="confirm-password"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
