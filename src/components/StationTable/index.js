import React, {useEffect, useState, useMemo} from "react";
import {DataGrid} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import rating from '../../data/dat_mock_up2.json'
import { useNavigate } from "react-router-dom";
import axios from "../../model/axios";

const columns = [
    {
      field: 'station_name',
      headerName: 'ชื่อปั๊ม',
      minWidth: 250,
      width:250,
      editable: true,
      flex: 1
    },
    {
      field: 'all_rating',
      headerName: 'เรตติ้ง',
      minWidth: 150,
      width:150,
      editable: true,
      flex: 1
    },
    {
      field: 'user_count',
      headerName: 'จำนวนคนรีวิว',
      minWidth: 150,
      width:150,
      editable: true,
      flex: 1
    },
    {
      field: 'review_date',
      headerName: 'วันที่อัปเดต',
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

export default function StationTable({searchValue}){
    const navigate = useNavigate()
    const [review, setReview] = useState([])

    useEffect(() => {
      async function getStaions() {
        try {
          const response = await axios.get('plug_mood/list-station-reviews');
          setReview(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      getStaions();
    },[])

    console.log(review)

    
    const rows = useMemo(() => {
      if (searchValue) {
        const searchResults = (review.results || []).filter((obj) => {
          return obj.station_name && obj.station_name.toLowerCase().includes(searchValue.toLowerCase());
        });
        return searchResults;
      } else {
        return review.results || [];
      }
    }, [searchValue, review]);

    const handleRowClick = (params) => {
        console.log(params.row.all_rating)
        navigate('/homepage/station/detail', { state  : { id: params.row.id, rating: params.row.all_rating }})
    };

    return(
        <Box sx={{ height: 450, width: '98%', marginTop:5 }}>
            <DataGrid
                rows={rows?.map((row) => ({ ...row, id: row.user_id }))}
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