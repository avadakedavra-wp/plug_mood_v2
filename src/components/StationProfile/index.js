import React from "react";
import Grid  from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function StationProfile({state}){
    return(
        <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
                <Grid container justify="left" alignItems="left">
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="h4">
                                {state.userName}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="h4">
                                เจ้าของ: {state.userName}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="subtitle1" marginLeft={2}>
                                สถานีชาร์จในบ้าน โดย ชื่อเจ้าของบ้าน
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <div>
                            <Typography variant="h4">
                                หัวปลั๊ก
                            </Typography>
                        </div>
                        <Grid container spacing={2}>
                            <Grid item xs={2} sm={2}>
                                {/* <img src={require("../../assets/img/image.png")} alt=""/> */}
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <div>
                                    <Typography variant="h6">
                                        J-1772
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Grid container justify="right" alignItems="right">
                <Typography variant="h5">
                            {state.userName}
                        </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}