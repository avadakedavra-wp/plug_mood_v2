import React from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import userHistory from '../../data/data_mock_up1.json'


const columns = [
    {
      field: 'userName',
      headerName: 'ชื่อผู้ใช้',
      minWidth: 150,
      width:150,
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar alt={params.value} src={params.row.avatar} />
          <div>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              {params.value}
            </Typography>
          </div>
        </Box>
      ),
    },
    {
      field: 'stationName',
      headerName: 'ชื่อสถานีชาร์จ',
      minWidth: 150,
      width:150,
      editable: true,
      flex: 1
    },
    {
      field: 'status',
      headerName: 'สถานะ',
      minWidth: 150,
      width:150,
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <Chip label={params.value} style={{backgroundColor: params.value === 'รอการตรวจสอบ' ? '#F8D315' : '#2BB169', color: '#ffff'}} />
      ),
    },
    {
      field: 'date',
      headerName: 'วันที่ยื่นคำร้อง',
      editable: true,
      minWidth: 150,
      width:150,
      flex: 1
    }
  ];
  
  const rows = [
    { id: 1, userName: 'Snow', stationName: 'stationName1', status: 'รอการตรวจสอบ' , date: 35 , avatar:'',},
    { id: 2, userName: 'Snow', stationName: 'stationName1', status: 'ตรวจสอบแล้ว' , date: 35 , avatar:''},
    { id: 3, userName: 'Snow', stationName: 'stationName1', status: 'รอการตรวจสอบ', date: 35 , avatar:''},
    { id: 4, userName: 'Snow', stationName: 'stationName1', status: 'ตรวจสอบแล้ว', date: 35 , avatar:''},

  ];

export default function RequestTable(){
    return(
        <Box sx={{ height: 250, width: '100%' }}>
            <DataGrid
                rows={userHistory.reslut}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
         </Box>
    );
}