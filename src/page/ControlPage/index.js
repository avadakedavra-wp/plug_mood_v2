import React, { createContext, useCallback, useState } from "react";
import NavBar from "../../components/NavBar";
import NavPage from "../../components/NavPage";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./style.css";
import axios from "../../model/axios";

const ENDPOINT = '/plug_mood/list-information'
const AuthContext = createContext({ isAuthenticated: false });

const ControlPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dataSession, setDataSession] = useState({});
  
  const handleLogin = useCallback(async (data) => {
    try{
      const response = await axios.post(ENDPOINT, {"email": data.email})
      if (data.email !== "" && data.password !== "") {
        if(response?.status === 200 && response.data.results.length > 0){
          const userData = response.data.results[0];
          const { userId, username, lastname } = userData;
          setIsAuthenticated(true);
          setDataSession({
            email: data.email,
            userId: userId,
            username: username,
            lastname: lastname,
            session: "logged in",
          });

        }
      } 
    }catch(err) {
      console.log(err)
    }
  }, []);
  console.log(dataSession)
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, dataSession, logout}}>
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
