import { Paper,Box } from "@mui/material";
import { Component } from "react";
import { Outlet } from "react-router-dom";


class RouteService extends Component{

render(){
        return(
            <>
            <center><h1>Our Services</h1></center>
                        <Box width="600px" sx={{paddingLeft:"25px"}}>
            <Paper elevation={10}>
               <h6> Service 1</h6>
               <h6> Service 2</h6>
               <h6> Service 3</h6>
               <h6> Service 4</h6>
               <h6> Service 5</h6>
               <h6> Service 6</h6>
               <h6> Service 7</h6>
               <h6> Service 8</h6>
               <h6> Service 9</h6>
     </Paper>
     </Box>
     <Outlet />
            </>
        )
    }
}
export default RouteService