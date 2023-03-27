import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from '../../model/axios';

export default function UserRequest() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);
    const labels = ["รูปบัตรประชาชนด้านหลัง", "ถ่ายรูปคู่กับบัตรประชาชน", "เอกสารยืนยันความเป็นเจ้าของบ้าน"];
    useEffect(() => {
        axios.get(`/plug_mood/get-request-info/${state.user_id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        axios.get(`/plug_mood/get-station-image?id=${state.image_id}`)
            .then(response => {
                setImage(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    })
    const detail = data.results
    return (
        <Grid container spacing={2} marginTop={10} justifyContent={"center"} alignItems={"center"}>
            {
                detail && detail.map((userDetail, index) => (
                    <Grid item xs={12} sm={12} >
                        <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000', height: 'auto', }} >
                            <Grid container spacing={2} sx={{ justifyContent: "space-between", alignItems: "center"}}>
                                <Grid item xs={12} sm={12} marginTop={4}>
                                    <div>
                                        <Typography variant="h4">
                                            <IconButton onClick={() => navigate(-1)}>
                                                <KeyboardArrowLeftIcon fontSize="large" />
                                            </IconButton>
                                            {userDetail.username}
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
                                                defaultValue={userDetail.username}
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
                                                defaultValue={userDetail.lastname}
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
                                                defaultValue={userDetail.email}
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
                                                defaultValue={userDetail.email}
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
                                                defaultValue={userDetail.id_card}
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
                                                defaultValue={userDetail.address}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {
                                    image ? image.map((image, index) => (
                                        <Grid item xs={4} sm={4}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12}>
                                                    <Typography variant="h6" marginLeft={5}>
                                                        {labels[index]}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={12} marginLeft={5}>
                                                    <img key={image.id} src={`data:${image.type};base64,${image.data}`} style={{ width: 200 }} alt="" />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    ))
                                    :
                                    <Grid item xs={4} sm={4}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={12}>
                                                    <Typography variant="h6" marginLeft={5}>
                                                        ผู้ใช้งานยังไม่อัพโหลดรูปภาพ
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                    </Grid>
                                }
                                <Grid container sx={{ justifyContent: "space-between", alignItems: "center", margin: 5, marginLeft: 40 }}>
                                    <Grid item xs={4} sm={4}>
                                        <Button variant="contained" color="error" onClick={() => console.log("Button 1 clicked")}>
                                            ไม่ผ่านการตจรวจสอบ
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4} sm={4}>
                                        <Button variant="contained" color="error" onClick={() => console.log("Button 2 clicked")} sx={{ marginLeft: 2 }}>
                                            ระงับการใช้งาน
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4} sm={4}>
                                        <Button variant="contained" color="success" onClick={() => console.log("Button 3 clicked")} sx={{ marginLeft: 2 }}>
                                            ผ่านการตรวจสอบ
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))
            }
        </Grid>
    );
}