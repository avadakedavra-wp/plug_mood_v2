import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import StationTable from "../../components/StationTable";

export default function StationsPage() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        event.preventDefault();
        // onSearch(searchTerm);
      }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Paper elevation={0} sx={{ width: '100%', borderColor: "text.primary", border: '2px solid #000', height: '690px' }} >
                        <Grid
                            container
                            spacing={0}
                            style={{ margin: 10, marginBottom: 10, marginTop: 10, height: "auto" }}
                        >
                            <Grid item xs={12} md={12} >
                                <div>
                                    <Typography variant="h4" sx={{ fontStyle: "bold" }}>
                                        รายการปั้มชาร์จ
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="ค้นหา"
                                    value={searchValue}
                                    size="small"
                                    onChange={handleSearchChange}
                                    sx={{ marginTop: 2, width:500 }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} style={{width:'100%'}}>
                                <StationTable />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}