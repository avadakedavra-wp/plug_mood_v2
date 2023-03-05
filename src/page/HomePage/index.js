import React, { useContext, useState } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { AuthContext } from "../ControlPage";
import RequestPage from "../RequestPage";
import StationsPage from "../StationsPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HomePage() {
  const [value, setValue] = useState(0);
  const { isAuthenticated, dataSession } = useContext(AuthContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacring={0} style={{ background: "#e0dcdc" }}>
      <Grid item xs={12} sm={12}>
        <Box sx={{ width: "100%", marginLeft:3}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            sx={{
              width:'500px',
              '& .MuiTabs-indicator': {
                backgroundColor: '#603494', // color of the selected tab indicator
              },
            }}
          >
            <Tab label="หน้าคำร้อง" {...a11yProps(0)} sx={{ fontSize: '20px',  color: '#000', '&.Mui-selected': { color: '#603494' } }} />
            <Tab label="รายการปั้ม" {...a11yProps(1)} sx={{ fontSize: '20px',  color: '#000', '&.Mui-selected': { color: '#603494' } }} />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12}>
        <TabPanel value={value} index={0}>
          <RequestPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StationsPage />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
