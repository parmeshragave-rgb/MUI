import { Stack ,Button,Typography} from "@mui/material";
import { Component } from "react";
import { withStyles } from "@mui/styles";
const styles={
btn:{
      backgroundColor:"yellow !important",
      color:"black !important"
    }
}
class Makestyles extends Component{

    render(){
      const {classes}=this.props
        return(
        <Stack spacing={2}>
            <Typography variant="h1">Click The Button Below</Typography>
             <Button variant="contained" size="small" className={classes.btn}>Click</Button>
        </Stack>
    )
    }
}
export  default withStyles(styles)(Makestyles)