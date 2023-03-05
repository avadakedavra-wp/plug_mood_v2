import React from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";
const labels = {
  0.5: "0.5/5",
  1: "1/5",
  1.5: "1.5/5",
  2: "2/5",
  2.5: "2.5/5",
  3: "3/5",
  3.5: "3.5/5",
  4: "4/5",
  4.5: "4.5/5",
  5: "5/5",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
export default function StarRating({ rating, showText, countReview }) {
  const [value, setValue] = React.useState(rating);
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={12}>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="read-only"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
          />
          {value !== null && showText !== "" && (
            <Box sx={{ ml: 3 }}> 
                {labels[value]}
            </Box>
          )}
          
        </Box>
      </Grid>
    </Grid>
  );
}
