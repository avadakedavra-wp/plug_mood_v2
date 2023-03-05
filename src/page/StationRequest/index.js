import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import RequestPage from "./RequestPage";

export default function StationRequest() {

    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Grid container spacing={0} style={{marginTop: 30}}>
                    <Grid item xs={12} sm={12}>
                        <RequestPage state={state} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Grid container spacing={0}>
                            <Grid item xs={6} sm={6}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    style={{ float: "left", marginLeft: 20 }}
                                >
                                    ไม่ผ่าน
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={6}>
                                <Button
                                    variant="contained"
                                    color="success"
                                    style={{ float: "right", marginRight: 20 }}
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