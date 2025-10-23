import { Component } from "react";
import { Grid,Box ,Stack,Paper} from "@mui/material";
class MuiLayout extends Component{
    render(){
        return(
            <>
            {/* <Stack spacing={2} direction={"row"}>
                <Box 
                bgcolor={'blue'} width={"60px"} height={"100px"} padding={"20px"}><h1>1</h1></Box>
                <Box bgcolor={'blue'}><h1>1</h1></Box>
                <Box bgcolor={'blue'}><h1>1</h1></Box>
                <Box bgcolor={'blue'}><h1>1</h1></Box>
            </Stack> */}
            <Paper elevation={4}>
            <Grid container padding={2} spacing={1}>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
                <Grid item xs={6} sm={3} md={2}><Box bgcolor={'blue'}><h1>1</h1></Box></Grid>
</Grid>
</Paper>
            </>
        )
    }
}
export default MuiLayout