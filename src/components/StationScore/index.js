import React, {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import StarIcon from '@mui/icons-material/Star';
import Paper from "@mui/material/Paper";
import ReviewGrid from "./ReviewGrid";
import dataReview from "../../data/data_review.json"

import { Typography } from "@mui/material";

const labels = {
    0.5: '0.5/5',
    1: '1/5',
    1.5: '1.5/5',
    2: '2/5',
    2.5: '2.5/5',
    3: '3/5',
    3.5: '3.5/5',
    4: '4/5',
    4.5: '4.5/5',
    5: '5/5',
};

export default function StationScore({ state, dataReview, rating }) {
    console.log(rating)
    return (
        <Grid container spacing={2}  justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={12} marginBottom={3}>
                <Grid container spacing={2}  justifyContent="center">
                    <Grid item xs={2} sm={2}>
                        <Typography>
                            คะแนนรวม: {rating}
                        </Typography>
                        <Typography>
                            จำนวนคนรีวิว: {dataReview.results.length} คน
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <Rating  name="read-only" value={5} showText={''} readOnly   />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <Rating  name="read-only" value={4} showText={''} readOnly  />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <Rating  name="read-only" value={3} showText={''} readOnly  />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <Rating  name="read-only" value={2} showText={''} readOnly  />
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <Rating  name="read-only" value={1} showText={''} readOnly  />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} sm={12}>
                <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000' }}>
                    <Grid container spacing={2} justifyContent={'center'}>
                        <Grid item xs={12} sm={12} md={12}>
                            <ReviewGrid dataReview={dataReview} />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}