import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export default function RequestPage({ staionsDetail }) {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    useEffect(() => {
        if(staionsDetail && staionsDetail.results && staionsDetail.results.length > 0){
            setData(staionsDetail.results[0])
        }else{
            setData([])
        }
    },[staionsDetail])
    
    console.log(data);
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" marginBottom={5}>
            <Grid item xs={6} sm={6}>
                <Grid container spacing={2} marginLeft={1}>
                    <Grid item xs={12} sm={12}>
                        <Grid container spacing={0}>
                            <Grid item xs={1} sm={1} >
                                <IconButton onClick={() => navigate(-1) }>
                                    <KeyboardArrowLeftIcon fontSize="large" />
                                </IconButton>
                            </Grid>
                            <Grid item xs={11} sm={11} marginTop={1}>
                                <div>
                                    <Typography variant="h5">{data.station_name}</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="h5">เจ้าของ: {data.username} {data.lastname}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="subtitle1" >
                                สถานีชาร์จในบ้าน โดย ชื่อเจ้าของบ้าน
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="h5">หัวปลั๊ก</Typography>
                        </div>
                        <Grid container spacing={2} >
                            <Grid item xs={2} sm={2}>
                                <img
                                    style={{ width: 55, heigh: "auto" }}
                                    src={require("../../assets/img/image.png")}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <div>
                                    <Typography variant="subtitle2">J-1772</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">จำนวนช่องชาร์จ</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">
                                        ราคา xxx บาท/กิโลวัต
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item xs={2} sm={2}>
                                <img
                                    style={{ width: 55, heigh: "auto" }}
                                    src={require("../../assets/img/image.png")}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <div>
                                    <Typography variant="subtitle2">J-1772</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">จำนวนช่องชาร์จ</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">
                                        ราคา xxx บาท/กิโลวัต
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} >
                            <Grid item xs={2} sm={2}>
                                <img
                                    style={{ width: 55, heigh: "auto" }}
                                    src={require("../../assets/img/image.png")}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <div>
                                    <Typography variant="subtitle2">J-1772</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">จำนวนช่องชาร์จ</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={3} sm={3}>
                                <div>
                                    <Typography variant="subtitle2">
                                        ราคา xxx บาท/กิโลวัต
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">เลือกประเภทของสถานที่ตั้ง</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">หมูบ้าน</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            เบอร์โทร์ติดต่อสถานที่ : 081-234-2344
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            เวลาเปิดทำการ 09:00 - 16:00
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">สิ่งอำหน่วยความสะดวก</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">ห้องน้ำ</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            เครื่องปรับอากาศ
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">Wi-Fi</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">Cafe</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">สถานที่</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            {data.station_address}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} marginTop={2}>
                            <div>
                                <Typography variant="h5">ช่องทางชำระเงิน</Typography>
                            </div>
                            <Grid container spacing={0} >
                                <Grid item xs={12} sm={12}>
                                    <div>
                                        <Typography variant="subtitle1">
                                            {data.payments}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Grid container justify="right" alignItems="right">
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../../assets/img/gallery.png")}
                            alt="defalut"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../../assets/img/gallery.png")}
                            alt="defalut"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../../assets/img/gallery.png")}
                            alt="defalut"
                        />
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <img
                            style={{ width: "50%" }}
                            src={require("../../assets/img/gallery.png")}
                            alt="defalut"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}