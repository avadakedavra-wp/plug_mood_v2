import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

export default function UserStatusGrid({ data }) {
    const userData = data.data_user;
    const navigate = useNavigate();
    return (
        <>
            <Box
                mb={2}
                display="flex"
                flexDirection="column"
                style={{ width: '97%', height: "424px", overflowY: "scroll" }}
            >
                {userData.map((user, index) => (
                    <Box key={index}>
                        <Card style={{ background: "#D7C0FD", width: "96%", marginTop: 8, marginLeft: 10 }} onClick={() => {
                            navigate('/user/request', { state  : { userName: user.username ,}})
                        }}>
                            <CardActionArea>
                            <Grid container spacing={0} style={{ background: "#D7C0FD" , margin: 5}}>
                                <Grid item xs={6} sm={6}>
                                    <div>
                                        <Typography variant="h6">{user.username}</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div>
                                        <Typography
                                            variant="body1"
                                            style={{
                                                color: user.status === "ยังไม่อ่าน" ? "red" : "#000",
                                                textAlign: "right",
                                                marginRight: 20
                                            }}
                                        >
                                            {user.status}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="body1">{user.datetime}</Typography>
                                </Grid>
                            </Grid>
                            </CardActionArea>
                        </Card>
                    </Box>
                ))}
            </Box>
            </>
        );
}