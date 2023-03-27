import React, {useEffect,useState,useMemo} from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import userHistory from '../../data/data_mock_up1.json'
import { useNavigate } from "react-router-dom";
import axios from "../../model/axios";

const columns = [
    {
      field: 'username',
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
      field: 'station_name',
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
        <Chip label={params.value === 0 ? 'ยังไม่ได้ตรวจสอบ' : params.value === 2 ? 'ไม่ผ่านการตรวจสอบ' : 'ผ่านการตรวจสอบ'} style={{backgroundColor: params.value === 0 ? '#F8D315': params.value === 2 ? "#FF2E2E" : '#2BB169', color: '#ffff'}} />
      ),
    },
    {
      field: 'create_date',
      headerName: 'วันที่ยื่นคำร้อง',
      editable: true,
      minWidth: 150,
      width:150,
      flex: 1,
      valueFormatter: (params) => {
        const date = new Date(params.value);
        const formattedDate = new Intl.DateTimeFormat('th-TH', { dateStyle: 'long' }).format(date);
        return formattedDate;
      }
    }
  ];

export default function RequestTable({searchTerm}){

  const navigate = useNavigate();
  const [staions, setStations] = useState([]);

    const handleRowClick = (params) => {
        console.log(params.row.id)
        navigate('/request', { state  : { id: params.row.id }})
    };

    useEffect(() => {
      async function getStaions() {
        try {
          const response = await axios.get('plug_mood/get-station');
          setStations(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      getStaions();
    },[])
    
    const rows =  useMemo(() => {
      if(searchTerm){
        const searchResults = staions.results.filter(obj => {
          return obj.username.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return searchResults;
      }else{
        return staions.results;
      }
    },[searchTerm,staions.results])

    return(
        <Box sx={{ height: 250, width: '100%' }}>
            {rows && rows.length >= 0 ? (
              <DataGrid
                rows={rows?.map((row) => ({ ...row, id: row.user_id }))}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                onRowClick={handleRowClick}
                experimentalFeatures={{ newEditingApi: true }}
              />
            ) : (
              <p>No data available</p>
            )}
         </Box>
    );
}