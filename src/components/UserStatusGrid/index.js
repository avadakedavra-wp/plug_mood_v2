import React, { useState, useEffect, useMemo } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import axios from '../../model/axios';

const ENDPOINT = '/plug_mood/list-request-info';

export default function UserStatusGrid({ filter, searchValue }) {
    const navigate = useNavigate();
    const [requestData, setRequestData] = useState([]);

    console.log(requestData);

    useEffect(() =>  {
        axios.get(ENDPOINT)
          .then(response => {
            setRequestData(response.data);
          })
    }, [])

    const userData = useMemo(() => {
        if(searchValue) {
            const searchResults = requestData.results.filter(obj => {
                return obj.username.toLowerCase().includes(searchValue.toLowerCase());
            });
            console.log(searchResults)
            return searchResults;
        }
        if (filter) {
            if (filter === "new") {
                const sortedData = [...requestData.results].sort((a, b) => new Date(b.request_date) - new Date(a.request_date));
                return sortedData;
            } else if (filter === "old") {
                const sortedData = [...requestData.results].sort((a, b) => new Date(a.request_date) - new Date(b.request_date));
                return sortedData;
            } else if (filter === "readed") {
                const filteredData = requestData.results.filter(obj => {
                    for (let prop in obj) {
                        if (typeof obj[prop] === "string" && obj[prop].includes("อ่านแล้ว")) {
                            return true;
                        }
                    }
                    return false;
                });
                return filteredData;
            } else if (filter === "read") {
                const filteredData = requestData.results.filter(obj => {
                    for (let prop in obj) {
                        if (typeof obj[prop] === "string" && obj[prop].includes("ยังไม่อ่าน")) {
                            return true;
                        }
                    }
                    return false;
                });
                return filteredData;
            }
        } else {
            return requestData.results;
        }
    }, [filter, requestData.results, searchValue]);


    return (
        <>
            <Box
                mb={2}
                display="flex"
                flexDirection="column"
                style={{ width: '97%', height: "424px", overflowY: "scroll" }}
            >
                {userData && userData.map((user, index) => (
                    <Box key={index}>
                        <Card style={{ background: "#D7C0FD", width: "96%", marginTop: 8, marginLeft: 10 }} onClick={() => {
                            console.log(user.request_id)
                            axios.put(`http://localhost:5000/plug_mood/read-request?id=${user.request_id}`).then(() =>{
                                navigate('/user/request', { state  : { user_id: user.user_id , image_id : user.image_id}})
                            }).catch((err) => console.log(err))
                        }}>
                            <CardActionArea>
                            <Grid container spacing={0} style={{ background: "#D7C0FD" , margin: 5}}>
                                <Grid item xs={6} sm={6}>
                                    <div>
                                        <Typography variant="h6">{user.username}</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div>
                                        <Typography
                                            variant="body1"
                                            style={{
                                                color: user.status === "ยังไม่อ่าน" ? "red" : "#000",
                                                textAlign: "right",
                                                marginRight: 20
                                            }}
                                        >
                                            {user.status}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div>
                                        <Typography variant="h6">{user.request_date}</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <div>
                                        <Typography
                                            variant="body1"
                                            style={{
                                                textAlign: "right",
                                                marginRight: 20
                                            }}
                                        >
                                            คำร้องขอครั้งที่ {user.SUM_REQUEST}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="body1">{user.datetime}</Typography>
                                </Grid>
                            </Grid>
                            </CardActionArea>
                        </Card>
                    </Box>
                ))}
            </Box>
            </>
        );
}