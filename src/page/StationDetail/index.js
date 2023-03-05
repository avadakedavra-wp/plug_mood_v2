import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Tabs, Box, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import StationProfile from "../../components/StationProfile";
import StationScore from "../../components/StationScore";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

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

export default function StationDetail() {
  const [value, setValue] = useState(0);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} flexDirection="column">
      <Grid item xs={3} sm={12}>
        <Grid container>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="รายละเอียดปั๊ม" {...a11yProps(0)} />
              <Tab label="รีวิว" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <TabPanel value={value} index={0}>
              <StationProfile state={state} />
            </TabPanel>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TabPanel value={value} index={1}>
              <Grid item xs={12} sm={12}>
                <StationScore state={state} />
              </Grid>
            </TabPanel>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={0} style={{ minHeight: "100vh" }}>
              <Grid item xs={6} sm={6}>
                <Button
                  variant="contained"
                  style={{ float: "left" }}
                  onClick={() => navigate(-1)}
                >
                  Back
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                  variant="contained"
                  color="error"
                  style={{ float: "right" }}
                >
                  Suspension
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
