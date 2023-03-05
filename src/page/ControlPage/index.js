import React, { createContext, useCallback, useState } from "react";
import NavBar from "../../components/NavBar";
import NavPage from "../../components/NavPage";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./style.css";
const AuthContext = createContext({ isAuthenticated: false });

const ControlPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dataSession, setDataSession] = useState({});
  const handleLogin = useCallback((data) => {
    // Perform authentication logic
    if (data.email !== "" && data.password !== "") {
      setIsAuthenticated(true);
      setDataSession({
        email: data.email,
        password: data.password,
        session: "logged in",
      });
      // Check if dataSession is updated
    }
  }, []);

  console.log(dataSession);
  console.log(isAuthenticated);

  return (
    <AuthContext.Provider value={{ isAuthenticated, dataSession }}>
      <Box>
        {isAuthenticated && (
          <Grid item xs={12} sm={12} md={12}>
            <NavBar />
          </Grid>
        )}
        <Box
          style={{
            marginTop: isAuthenticated ? '80px' : '0px'
          }}
        >
          <NavPage handleLogin={handleLogin} />
        </Box>
      </Box>
    </AuthContext.Provider>
  );
};

export default ControlPage;
export { AuthContext };
