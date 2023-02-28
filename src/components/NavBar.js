import React from "react";
import logo from '../assets/img/logo.png'
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {

    return (
        <AppBar sx={{ backgroundColor: '#3C096C' }}>
            <Toolbar>
                <img src={logo} height={80} width={80} alt={logo} style={{ marginRight: 16 }} />
                <div>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Plug Mood
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar