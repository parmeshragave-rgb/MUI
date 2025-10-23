import { Component } from "react";
import { Drawer,Typography ,Box,IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
class MuiDrawer extends Component{
    state={
        isopen:false
    }
    
    setdrawer =() => {
        this.setState({
              isopen:false
        })
    }
    render(){
        return(
            <>
            <IconButton onClick={() => {this.setState({isopen:true})}}>
                     <MenuIcon/>
            </IconButton>
            <Drawer anchor="left" open={this.state.isopen} onClose={this.setdrawer}>
                <Box p={2} width={"250px"} textAlign={"center"}>
                    <Typography variant="h6" >Side panel</Typography>
                </Box>
            </Drawer>
            </>
        )
    }
}
export default MuiDrawer