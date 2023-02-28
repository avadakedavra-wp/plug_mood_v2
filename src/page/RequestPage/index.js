import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import RequestSection from "../../components/RequestSection";
import LineCharts from "../../components/LineCharts";
import PieCharts from "../../components/PieCharts";

export default function RequestPage() {
  return (
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
            <Paper elevation={0} sx={{  width:'100%', borderColor: "text.primary", border: '2px solid #000' }} >
                <RequestSection />
            </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12}>
              <Paper elevation={0} sx={{  width:'100%', borderColor: "text.primary", border: '2px solid #000' }} >
                <LineCharts />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} sx={{  width:'100%', borderColor: "text.primary", border: '2px solid #000', marginTop:'10px'}} >
              <Paper elevation={0}>
                <PieCharts />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}
