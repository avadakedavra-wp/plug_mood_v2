import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../ControlPage';
// import useStyles from './style';
import { inputLabelClasses } from "@mui/material/InputLabel";
import axios from '../../model/axios';
const ENDPOINT = '/plug_mood/login';

function Copyright(props) {
    return (
        <Typography variant="body2" color="white" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Plug Mood
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function LoginPage({ handleLogin }) {
    const navigate = useNavigate()
    const [errMsg, setErrMsg] = useState('')
    const [validate, setValidate] = useState(false)
    const { isAuthenticated } = useContext(AuthContext)
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email'); 
        const pwd = data.get('password')
        console.log(email)
        console.log(pwd)
        try {
            const response = await axios.post(ENDPOINT, {"email": email, "password": pwd})
            // console.log(response)
            if(response?.status === 200 && response?.data.data.length !== 0){
                handleLogin({
                    email: data.get('email'),
                    password: data.get('password'),
                })
            }else{
                setErrMsg('Your Email and Password is incorrect. Please try again')
                setValidate(true)
            }
        }catch (error){
            console.log(error)
            if(!error?.response){
                setErrMsg('No server Respone')
            }else if(error.response?.status === 400){
                setErrMsg('Missing Username or Password')
            }else {
                setErrMsg('Login Failed')
            }
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/homepage');
        }
    }, [isAuthenticated, navigate]);

    return (
        <Grid container component="main" sx={{ height: '100vh', width: '100%' }}>
            <CssBaseline />
            <Grid
                item
                xs={12}
                sm={4}
                md={7}
                sx={{ backgroundColor: '#5e3195', width: '100%' }}
            >
                <Grid item justify="left" alignItems="left" style={{ marginBottom: '15%', marginLeft: '25px', marginTop: '25px' }}>
                    <Typography variant="h3" color={'white'} style={{ textAlign: 'left', }}>
                        Plug Mood
                    </Typography>
                </Grid>
                <Grid item justify="center" alignItems="center">
                    <img src={require('../../assets/img/logo.png')} alt="plug mood logo. " style={{ width: '100%', maxWidth: '300px', display: 'block', marginLeft: '30%' }} />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={8} md={5} sx={{ backgroundColor: '#6d38ad', }} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        marginTop: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5" color={'white'}>
                        Sign in
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            className={clsx({
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "white",
                                    color: "white",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white"
                                    },
                                    "& .MuiInputLabel-outlined": {
                                        color: "white"
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "white"
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: 'white !important',
                                        borderWidth: '2px !important',
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        borderColor: "orange",
                                    },
                                }
                            })}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                            error={validate}
                            helperText= {validate && (errMsg)}
                            InputLabelProps={{
                                sx: {
                                    color: "white",
                                    [`&.${inputLabelClasses.shrink}`]: {
                                        color: "white"
                                    }
                                }
                            }}
                        />
                        <TextField
                            className={clsx({
                                "& .MuiOutlinedInput-root": {
                                    borderColor: "white",
                                    color: "white",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "white"
                                    },
                                    "& .MuiInputLabel-outlined": {
                                        color: "white"
                                    },
                                    "& .MuiInputBase-input": {
                                        color: "white"
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: 'white !important',
                                        borderWidth: '2px !important',
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        borderColor: "orange",
                                    },
                                }
                            })}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            error={validate}
                            helperText= {validate && (errMsg)}
                            autoComplete="current-password"
                            InputLabelProps={{
                                sx: {
                                    color: "white",
                                    [`&.${inputLabelClasses.shrink}`]: {
                                        color: "white"
                                    }
                                }
                            }}
                        />
                        <Button
                            className={clsx({
                                "&.MuiButton-root": {
                                    border: "1px black solid"
                                },
                                "&.MuiButton-text": {
                                    color: "white"
                                },
                                ".MuiButton-outlinedPrimary": {
                                    color: 'grey',
                                },
                                "&.MuiButton-contained": {
                                    color: "white"
                                },
                                "&.MuiButton-outlined": {
                                    color: "white"
                                }
                            })}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="register" variant="body2" style={{ textDecoration: 'none' }}>
                                    <Typography color={'white'}> Forgot password? </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/register" variant="body2" style={{ textDecoration: 'none' }}>
                                    <Typography color={'white'}> Create account </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}