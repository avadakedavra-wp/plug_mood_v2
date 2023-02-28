import React, { createContext, useCallback, useState } from "react";
import NavBar from "../../components/NavBar";
import NavPage from "../../components/NavPage";
import { Box, Grid } from "@mui/material";

const AuthContext = createContext({ isAuthenticated: false });


const ControlPage = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [dataSession, setDataSession] = useState({})
    const handleLogin = useCallback((data) => {
        // Perform authentication logic
        if (data.email !== '' && data.password !== '') {
            setIsAuthenticated(true);
            setDataSession({
                email: data.email,
                password: data.password,
                session: 'logged in'
            });
            // Check if dataSession is updated
        }
    }, []);

    console.log(dataSession)
    console.log(isAuthenticated)

    return (
        <AuthContext.Provider value={{ isAuthenticated, dataSession }}>
            <Box>
                {/* Heading section */}
                {isAuthenticated && (
                    <Box sx={{ width: '100%' }}>
                        <NavBar />
                    </Box>
                )}

                <Grid container spacing={0}>
                    <Grid item xs={12} md={9} sx={{ width: '100%' }}>
                        <NavPage handleLogin={handleLogin} />
                    </Grid>
                </Grid>
            </Box>
        </AuthContext.Provider>

    );
}

export default ControlPage
export { AuthContext }
