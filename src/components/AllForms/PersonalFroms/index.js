import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "../../../model/axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../page/ControlPage";
const ENDPOINT = "/plug_mood/register"

export default function PersonalForm({formData, handleLogin}){

    const navigate = useNavigate()
    const [formPersonalData, setFormPersonalData] = useState({});
    const { isAuthenticated } = useContext(AuthContext)
    // const [submit, setSubmit] = useState(0)
    // const [errMsg ,setErrMsg] = useState('')
    // const [validate ,setValidate] = useState(false)

    const handleChange = (event) => {
        setFormPersonalData({
        ...formPersonalData,
        [event.target.name]: event.target.value
      });
    };

    console.log(handleLogin);

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post(ENDPOINT, {
          "username":formPersonalData.Fname,
          "lastname":formPersonalData.lName,
          "email":formData.email,
          "telephone":formPersonalData.tel,
          "password":formData.pass
        })
        console.log(response)
        if(response?.status === 200 && response?.data.results.length !== 0){
          handleLogin({
            email: formData.email,
            password: formData.pass,
          })
        }
    }catch (error){
        console.log(error)
    }
    };

    useEffect(() => {
      if (isAuthenticated) {
          navigate('/homepage');
      }

  }, [isAuthenticated, navigate]);

    return (
        <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            >
            <Typography component="h1" variant="h5">
              Persernal Information
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="Fname"
                    label="Frist Name"
                    name="Fname"
                    autoComplete="Fname"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="lName"
                    label="Last Name"
                    name="lName"
                    autoComplete="lName"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="tel"
                    label="Telephone"
                    id="tel"
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
        </Box>
    );
}