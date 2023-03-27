import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import UserStatusGrid from "../UserStatusGrid";
import Box from "@mui/material/Box";

export default function RequestSection({userData, requestData}) {
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
  console.log(filter)
  return (
    <>
    <Grid container spacing={0} style={{height: "auto"}}>
      <FormControl onSubmit={handleSearchSubmit}>
        <Grid
          container
          spacing={0}
          style={{ margin: 10, marginBottom: 10, marginTop: 10, height: "auto" }}
        >
          <Grid item xs={6} md={8} >
            <div>
              <Typography variant="h5" sx={{ fontStyle: "bold" }}>
                คำร้องขอลงทะเบียนผู้ใช้งาน
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={4} >
            <RadioGroup row value={filter} onChange={handleFilterChange} style={{ textAlign: 'right'}}>
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
                value="old"
                control={<Radio />}
                label="เรียงตามวันที่เก่าสุด"
                labelPlacement="end"
              />
              <FormControlLabel
                value="read"
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
              size="small"
              onChange={handleSearchChange}
              sx={{ marginTop: 2}}
            />
          </Grid>
          <Grid item xs={12} sm={12} style={{marginTop:25}}>
            <UserStatusGrid filter={filter} searchValue={searchValue} />
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
    </>
  );
}
