import { TextField,Stack,InputAdornment} from "@mui/material"
import React,{Component} from "react"
class MuiTextfield extends Component{


    state={
        val:''
    }
    



handler = (e:React.ChangeEvent<HTMLInputElement>) =>{
 this.setState({
        val:e.target.value
    })
}
   

render(){

return(
    <Stack spacing={4}>
<Stack spacing={2} direction={"row"}>
<TextField label="name"  variant="outlined"></TextField>
<TextField label="name"  variant="filled"></TextField>
<TextField label="name"  variant="standard"></TextField>
</Stack>

<Stack spacing={2} direction={"row"}>
<TextField label="name"  variant="outlined" size="small" color="secondary"></TextField>
<TextField label="name"  variant="outlined" size="small" color="secondary"
helperText="fill in capital letter"></TextField>
<TextField label="name"  variant="outlined" size="small" color="secondary" required></TextField>
<TextField label="Password"  variant="outlined" size="small" color="secondary"
type="password"></TextField>
</Stack>

<Stack spacing={2} direction={"row"}>
<TextField label="Forms" size="small" variant="outlined" disabled></TextField>
<TextField label="Read-only"  variant="filled"  size="small" InputProps={{readOnly:true}}></TextField>
<TextField label="name" value={this.state.val} size="small" variant="outlined" onChange={(e) => this.handler(e)}
    error={!this.state.val}
    helperText={!this.state.val ? "Required" : "Enter name"}
    ></TextField>
</Stack>

<Stack spacing={2} direction={"row"}>
<TextField label="Amount"  variant="outlined" size="small" color="secondary" InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment>}}></TextField>
<TextField label="Weight"  variant="outlined" size="small" color="secondary" InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}}></TextField>

</Stack>
    
    </Stack>
    )
}
}
export default MuiTextfield