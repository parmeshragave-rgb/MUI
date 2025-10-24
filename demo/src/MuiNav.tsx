import { Component } from "react";
import { AppBar,Toolbar ,IconButton,Typography,Button,Stack} from "@mui/material";
import AbcIcon from '@mui/icons-material/Abc';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useauth } from './auth'

class MuiNav extends Component{
    
    clickihandle = () => {
           this.props.navigate('/products');
    }
    render(){
        return(
            <>
            <AppBar position="static">
                 <Toolbar>
                    <IconButton size="large" color="inherit" edge="start">
                        <AbcIcon/>
                    </IconButton>
                    <Typography variant="h6" color="secondary.main" sx={{flexGrow:1}}>
                    ALPHA
                    </Typography>
                    <Stack spacing={2} direction={"row"}>
                         <Button color="inherit"><Link to='/'>Home</Link></Button>
                         <Button color="inherit"><Link to='/about'>About</Link></Button>
                         <Button color="inherit" onClick={this.clickihandle}>Products</Button>
                         <Button color="inherit"><Link to='/services'>Services</Link></Button>
                         <Button color="inherit"><Link to='/profile'>Profile</Link></Button>
                    
                        {!this.props.auth.user && (    <Button color="inherit" sx={{alignContent:"center", justifyContent:"center"}}><Link to='/login'>Login</Link></Button>)}

                    </Stack>
                    
                 </Toolbar>
            </AppBar>
            </>
        )
    }
}
function Wrapper(){
    const navigate=useNavigate();
    const auth=useauth()
    return <MuiNav navigate={navigate} auth={auth}/>
}
export  default Wrapper