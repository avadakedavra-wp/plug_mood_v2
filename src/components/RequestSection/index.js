import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import userData from '../../data/data_mock_up.json'
import UserStatusGrid from "../UserStatusGrid";
export default function RequestSection() {
  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic using filterValue and searchValue
  };
  return (
    <Grid container spacing={0}>
      <FormControl component="form" onSubmit={handleSearchSubmit}>
        <Grid
          container
          spacing={0}
          style={{ margin: 10, marginBottom: 10, marginTo: 10 }}
        >
          <Grid item xs={6} sm={6}>
            <Typography variant="h5" sx={{ fontStyle: "bold" }}>
              คำร้องขอลงทะเบียนผู้ใช้งาน
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <RadioGroup row value={filter} onChange={handleFilterChange}>
              <FormControlLabel
                value="new"
                control={<Radio />}
                label="เรียงตามวันที่ล่าสุด"
                labelPlacement="end"
              />
              <FormControlLabel
                value="readed"
                control={<Radio />}
                label="อ่านแล้ว"
                labelPlacement="end"
              />
              <FormControlLabel
                value="option2"
                control={<Radio />}
                label="เรียงตามวันที่เก่าสุด"
                labelPlacement="end"
              />
              <FormControlLabel
                value="option3"
                control={<Radio />}
                label="ยังไม่อ่าน"
                labelPlacement="end"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              label="ค้นหา"
              value={searchValue}
              onChange={handleSearchChange}
              sx={{ marginTop: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <UserStatusGrid data={userData} />
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  );
}
