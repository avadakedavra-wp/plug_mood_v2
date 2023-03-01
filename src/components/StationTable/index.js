import React from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import rating from '../../data/dat_mock_up2.json'
import { useNavigate } from "react-router-dom";


const columns = [
    {
      field: 'stationName',
      headerName: 'ชื่อปั๊ม',
      minWidth: 250,
      width:250,
      editable: true,
      flex: 1
    },
    {
      field: 'rating',
      headerName: 'เรตติ้ง',
      minWidth: 150,
      width:150,
      editable: true,
      flex: 1
    },
    {
      field: 'reviewCount',
      headerName: 'จำนวนคนรีวิว',
      minWidth: 150,
      width:150,
      editable: true,
      flex: 1
    },
    {
      field: 'updateDate',
      headerName: 'วันที่อัปเดต',
      editable: true,
      minWidth: 150,
      width:150,
      flex: 1
    }
  ];

export default function StationTable(){
    const navigate = useNavigate()

    const handleRowClick = (params) => {
        console.log(params.row.stationName)
        navigate('/homepage/station/detail', { state  : { userName: params.row.stationName,id: params.row.id }})
    };

    return(
        <Box sx={{ height: 450, width: '98%', marginTop:5 }}>
            <DataGrid
                rows={rating.results}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                onRowClick={handleRowClick}
                experimentalFeatures={{ newEditingApi: true }}
            />
         </Box>
    );
}