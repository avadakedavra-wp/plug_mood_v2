import React, { useSate } from "react";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from "@mui/material/Paper";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function HomePage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Grid container spacring={0} style={{background: '#e0dcdc'}}>
            <Grid item xs={12} sm={12} >
                <Box sx={{ width: '100%',}}>
                    <Tabs value={value} onChange={handleChange}>
                        <LinkTab label="หน้าคำร้อง" href="/drafts" />
                        <LinkTab label="รายการปั้ม" href="/trash" />
                    </Tabs>
                </Box>
            </Grid>
        </Grid>
        </>
    );
}