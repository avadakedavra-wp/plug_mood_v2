import React, { useState, useContext } from "react";
import logo from '../assets/img/logo.png'
import { AppBar, Toolbar, Typography, Avatar, Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AuthContext } from "../page/ControlPage";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogoutClose = () => {
        setAnchorEl(null);
        authContext.logout();
        navigate('/')
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(authContext.dataSession)
    return (
        <AppBar sx={{ backgroundColor: "#3C096C" }}>
            <Toolbar>
                <img src={logo} height={80} width={80} alt={logo} style={{ marginRight: 16 }} />
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Plug Mood
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="subtitle1" component="div" sx={{ marginRight: 2 }} onClick={handleClick}>
                        {authContext.dataSession.username}
                    </Typography>
                    <Avatar alt={authContext.dataSession.username} src="/static/images/avatar/1.jpg" onClick={handleClick} />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>โปรไฟล์</MenuItem>
                        <MenuItem onClick={handleLogoutClose}>ออกจากระบบ</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar