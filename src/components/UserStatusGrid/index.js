import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function UserStatusGrid({data}){
    const userData = data.data_user;
    const [scrollPosition, setScrollPosition] = useState(0);

    return(
        <Box
    mb={2}
    display="flex"
    flexDirection="column"
    style={{ height: "424px", overflowY: "scroll" }}
>
    {userData.map((user, index) => (
        <Box key={index}>
            <Paper variant="outlined" style={{ background: "#D7C0FD", width: "96%", marginTop: 5 }}>
                <Grid container spacing={0} style={{ background: "#D7C0FD" }}>
                    <Grid item xs={6} sm={6}>
                        <Typography variant="h5">{user.username}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Typography
                            variant="body1"
                            style={{
                                color: user.status === "ยังไม่อ่าน" ? "red" : "#000",
                                textAlign: "right",
                            }}
                        >
                            {user.status}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="body1">{user.datetime}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    ))}
</Box>
    );
}