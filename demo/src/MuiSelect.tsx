import React,{ Component} from "react";
import { TextField,Box,MenuItem ,} from "@mui/material";
class MuiSelect extends Component{

    state={
        tech:[]
    }

    handler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
    this.setState({
      tech: typeof value === "string" ? value.split(",") : value,
    });
    }
    render(){
        return(
            
<Box width="200px">
<TextField label="Select Techstack" variant="outlined" 
fullWidth
select
color="secondary"
value={this.state.tech}
onChange={this.handler}
SelectProps={{multiple:true}}
>
 <MenuItem value="react">React</MenuItem>
 <MenuItem value="Angular">Angular</MenuItem>
 <MenuItem value="Js">Js</MenuItem>
</TextField>
</Box>
            
        )
    }
}
export default MuiSelect