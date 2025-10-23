import { Stack ,Button,Typography} from "@mui/material";
import React from "react"


function Sx(){
 
    return(
        <Stack spacing={2}>
            <Typography variant="h1">Click The Button Below</Typography>
             <Button variant="contained" size="small"  
             sx={
                {
                     backgroundColor:"yellow !important",
      color:"black !important"
                }
             }>Click</Button>
        </Stack>
    )
    
}
export  default Sx