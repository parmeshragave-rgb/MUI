import { Stack ,Button,Typography} from "@mui/material";
import React from "react"
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
    btn:{
      backgroundColor:"yellow !important",
      color:"black !important"
    }
})
function Makestylesfun(){
 const classes=useStyles()
    return(
        <Stack spacing={2}>
            <Typography variant="h1">Click The Button Below</Typography>
             <Button variant="contained" size="small" className={classes.btn}>Click</Button>
        </Stack>
    )
    
}
export  default Makestylesfun