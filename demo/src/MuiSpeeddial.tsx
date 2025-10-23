import { Component} from "react";
import { SpeedDial,SpeedDialIcon,SpeedDialAction } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';
class MuiSpeeddial extends Component{
    render(){
        return(
            
<SpeedDial ariaLabel="SpeedDial example" icon={<SpeedDialIcon/>} sx={{position:"fixed", bottom:16,right:16,color:'secondary.main'}}>

    <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle="Copy"/> 
    <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share"/> 
    <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print"/> 


</SpeedDial>
            
        )
    }
}
export default MuiSpeeddial