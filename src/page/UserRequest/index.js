import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';

export default function UserRequest() {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <Grid container spacing={2} marginTop={10} justifyContent={"center"} alignItems={"center"}>
            <Grid item xs={12} sm={12} >
                <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000', height: '690px', }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} marginTop={4}>
                            <div>
                                <Typography variant="h4">
                                    <IconButton onClick={() => navigate(-1)}>
                                        <KeyboardArrowLeftIcon fontSize="large" />
                                    </IconButton>
                                    {state.userName}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} >
                            <Grid container spacing={2}>
                                <Grid item xs={2} sm={2}>
                                    <Typography variant="h5" marginLeft={5}>
                                        ชื่อจริง
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <TextField
                                        id="outlined-size-small"
                                        size="small"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        defaultValue={state.userName}
                                        sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '61%' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={2} sm={2}>
                                    <Typography variant="h5">
                                        นามสกุล
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <TextField
                                        id="outlined-size-small"
                                        size="small"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        defaultValue={state.userName}
                                        sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '61%' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6} >
                            <Grid container spacing={2}>
                                <Grid item xs={2} sm={2}>
                                    <Typography variant="h5" marginLeft={5}>
                                        อีเมล
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <TextField
                                        id="outlined-size-small"
                                        size="small"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        defaultValue={state.userName}
                                        sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '61%' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={2} sm={2}>
                                    <Typography variant="h5">
                                        เบอร์โทร
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <TextField
                                        id="outlined-size-small"
                                        size="small"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        defaultValue={state.userName}
                                        sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '56%' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={2} sm={2}>
                                    <Typography variant="h5" marginLeft={5}>
                                        เลขบัตรประชาชน
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <TextField
                                        id="outlined-size-small"
                                        size="small"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        defaultValue={state.userName}
                                        sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '20%' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={1} sm={1}>
                                    <Typography variant="h5" marginLeft={5}>
                                        ที่อยู่
                                    </Typography>
                                </Grid>
                                <Grid item xs={10} sm={10}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: '30%' }}
                                        multiline
                                        rows={4}
                                        defaultValue="Default Value"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h6" marginLeft={5}>
                                        รูปบัตรประชาชนด้านหลัง
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} marginLeft={5}>
                                    <img src={require("../../assets/img/gallery.png")} alt="test_photo" style={{width: 150}} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h6" marginLeft={5}>
                                        ถ่ายรูปคู่กับบัตรประชาชน
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} marginLeft={5}>
                                    <img src={require("../../assets/img/gallery.png")} alt="test_photo" style={{width: 150}} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h6" marginLeft={5}>
                                        เอกสารยืนยันความเป็นเจ้าของบ้าน
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} marginLeft={5}>
                                    <img src={require("../../assets/img/gallery.png")} alt="test_photo" style={{width: 150}} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}