import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarRating from "./StartRating";
import Rating from '@mui/material/Rating';

export default function ReviewGrid({userData, dataReview}){
    console.log("data", dataReview)
    return(
        <Box
                mb={2}
                display="flex"
                flexDirection="column"
                style={{ width: '99%', height: "424px", overflowY: "scroll" }}
            >
                {dataReview.results?.map((data, index) => {
                    const date = new Date(data.review_date);
                    const formattedDate = new Intl.DateTimeFormat('th-TH', { dateStyle: 'long' }).format(date);
                    console.log(data.rating)
                    return(
                    <Box key={index}>
                        <Paper variant="outlined" style={{ marginLeft: 3,background: "#FFFFFF", width: "98%", marginTop: 5 }}>
                            <Grid container spacing={0}  style={{ background: "#FFFFFF" , margin:20, }}>
                                <Grid item xs={1} sm={1} alignItems="center" marginTop={2}>
                                    <Avatar style={{ marginLeft: 20 }} src={"../../assets/icons/user (1).png"} />
                                </Grid>
                                <Grid item xs={11} sm={11}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={12} sm={12} >
                                            <Typography>
                                                {data.user_review}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Typography>
                                                <Rating value={data.rating} readOnly/>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Typography>
                                                {data.descripton}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Typography>
                                                {formattedDate}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                )})}
            </Box>
    );
}