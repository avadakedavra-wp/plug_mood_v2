import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import RequestPage from "./RequestPage";
import axios from "../../model/axios";

export default function StationRequest() {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [staionsDetail, setStaionsDetail] = useState([]);

    useEffect(() => {
        async function getStaions() {
            try {
              const response = await axios.get(`/plug_mood/get-detail-station?id=${state.id}`);
              setStaionsDetail(response.data);
            } catch (error) {
              console.error(error);
            }
          }
          getStaions();
          
    },[state.id])

    console.log("state.id",state.id)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Grid container spacing={0} style={{marginTop: 30}}>
                    <Grid item xs={12} sm={12}>
                        <RequestPage state={state} staionsDetail={staionsDetail}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Grid container spacing={0}>
                            <Grid item xs={6} sm={6}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    style={{ float: "left", marginLeft: 20 }}
                                    onClick={() => {
                                        axios.put(`http://localhost:5000/plug_mood/approve-stations?id=${state.id}&approve=2`)
                                        .then(() => {
                                            navigate(-1)
                                        })
                                    }}
                                >
                                    ไม่ผ่าน
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    style={{ float: "right", marginRight: 20 }}
                                    onClick={() => {
                                        axios.put(`http://localhost:5000/plug_mood/approve-stations?id=${state.id}&approve=1`)
                                        .then(() => {
                                            navigate(-1)
                                        })
                                    }}
                                >
                                    ผ่านการตรวจสอบ
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}