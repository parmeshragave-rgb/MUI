import { Component } from "react";
import { TextField ,Box,Toolbar,Stack} from "@mui/material";
import { Link,Outlet} from "react-router-dom";

class Routehome extends Component{
    render(){
        return(
            <>
            <center><h1>Home</h1></center>
            <Box width="500px">
          <Toolbar>
            <TextField variant="outlined" label="Search" fullWidth size="medium"></TextField>
            </Toolbar>
            </Box>
            <Stack spacing={2} direction={"row"} rowGap={1} sx={{padding:"25px"}}>
            
                 <Link to="featuredproducts">Featured Products</Link>
                 <Link to="featuredservices">Featured Services</Link>
            
            </Stack>
            <Outlet/>
            </>
        )
    }
}
export default Routehome