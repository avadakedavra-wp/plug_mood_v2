import React from "react";
import { useLocation } from "react-router-dom";

export default function StationDetail(){
    const { state } = useLocation();
    console.log(state)
    return(
        <>  
            <p>{state.id}</p>
            <p>{state.userName}</p>
        </>
    )
}