import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Tabs, Box, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Divider from "@mui/material/Divider";
import StationProfile from "../../components/StationProfile";
import StationScore from "../../components/StationScore";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "../../model/axios";
import { useLocation } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
  const [dataDetail, setDataDetail] = useState([]);
  const [dataReview, setdataReview] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDelete = async() => {
    const responseDetail = await axios.put(`/plug_mood/delete-station?id=${state.id}`);
    if(responseDetail.status===200){
      navigate(-1);
    }
  };

  const navigate = useNavigate();
  console.log(state);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getData() {
      try {
        const responseReview = await axios.get(`/plug_mood/list-reviews?id=${state.id}`);
        const responseDetail = await axios.get(`/plug_mood/get-detail-station?id=${state.id}`);
        setdataReview(responseReview.data);
        setDataDetail(responseDetail.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  },[state.id])
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
              variant="fullWidth"
              sx={{
                width:'500px',
                '& .MuiTabs-indicator': {
                  backgroundColor: '#603494', // color of the selected tab indicator
                },
              }}
            >
              <Tab label="รายละเอียดปั๊ม" {...a11yProps(0)} sx={{ fontSize: '20px', color: '#000', '&.Mui-selected': { color: '#603494' } }} />
              <Tab label="รีวิว" {...a11yProps(1)} sx={{ fontSize: '20px', color: '#000', '&.Mui-selected': { color: '#603494' } }} />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <TabPanel value={value} index={0}>
              <StationProfile state={state} dataDetail={dataDetail} />
            </TabPanel>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <TabPanel value={value} index={1}>
              <Grid item xs={12} sm={12}>
                <StationScore state={state} dataReview={dataReview} rating={state.rating} />
              </Grid>
            </TabPanel>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
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
                onClick={handleClickOpen}>
                Suspension
              </Button>
              <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  คุณกำลังจะแบนสถานี {state.statioName}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    คุณแน่ใจแล้วหรือที่จะแบนการใช้งานของสถานีนี้.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Disagree</Button>
                  <Button onClick={handleCloseDelete} autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
