 
 import { Component } from "react"
 import { Box,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio } from "@mui/material"
 class MuiRadio extends Component{
    render(){
        return(
            <Box>
                <FormControl>
                    <FormLabel>Experience</FormLabel>
                    <RadioGroup>
                    <FormControlLabel control={<Radio/>} label='0-2 yrs' value='0-2 yrs'/>
                    <FormControlLabel control={<Radio/>}  label="2-5 yrs" value='2-5 yrs'/>
                    <FormControlLabel control={<Radio/>}  label="5 yrs+" value='5+ yrs'/>

                    </RadioGroup>
                </FormControl>
            </Box>
        )
    }
 }
 export default MuiRadio