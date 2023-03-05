import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import userData from '../../data/data_mock_up.json'
import RequestSection from "../../components/RequestSection";
import LineCharts from "../../components/LineCharts";
import PieCharts from "../../components/PieCharts";
import RequestTable from "../../components/RequestTable";
import TextField from "@mui/material/TextField";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function RequestPage() {

  const [searchTerm, setSearchTerm] = useState('');
  const [activeChart, setActiveChart] = useState(0);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSerachSubmit = (event) => {
    event.preventDefault();
    // onSearch(searchTerm);
  }

  const handlePageChange = (event, value) => {
    setActiveChart(value - 1);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000', height: '690px' }} >
            <RequestSection userData={userData} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12}>
                    {activeChart === 0 && (<LineCharts name={'month'} />)}
                    {activeChart === 1 && (<LineCharts name={'Daily'} />)}
                    {activeChart === 2 && (<LineCharts name={'year'} />)}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 3
                    }}>
                    <Stack spacing={2}>
                      <Pagination count={3} variant="outlined" onChange={handlePageChange} />
                    </Stack>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000' }} >
                <PieCharts />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000' }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <div>
                  <Typography variant="h5" style={{ margin: 10, marginBottom: 10, marginTo: 10 }}>
                    คำร้องขอลงทะเบียนสถานีชาร์จ
                  </Typography>
                </div>
                <form onSubmit={handleSerachSubmit}>
                  <TextField
                    size="small"
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    style={{
                      width: 300,
                      margin: 10,
                      marginBottom: 10,
                      marginTo: 10
                    }}
                    onChange={handleInputChange}
                  />
                </form>
              </Grid>
              <Grid item xs={12} sm={12}>
                <RequestTable />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
