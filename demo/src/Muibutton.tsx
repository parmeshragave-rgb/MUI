import { Button, Stack,IconButton } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Muibutton(){
    return(
        <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
            <Button variant="text">text</Button>
            <Button variant="contained">contained</Button>
            <Button variant="outlined">outlined</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button variant="contained" color="primary">primary</Button>
            <Button variant="contained"  color="secondary">secondary</Button>
            
            <Button variant="contained"  color="error">error</Button>
            
            <Button variant="contained"  color="warning">warning</Button>
            
            <Button variant="contained"  color="info">info</Button>
            <Button variant="contained"  color="success">success</Button>
        </Stack>
        <Stack spacing={2} direction={'row'} display={'block'}>
            <Button variant="contained" size="small">small</Button>
            <Button variant="contained"  size="medium">medium</Button>
            <Button variant="contained"  size="large">large</Button>
            </Stack>
            <Stack spacing={2} direction={'row'} display={'block'}>
            <Button startIcon={<SearchRoundedIcon/>} variant="contained" disableRipple>Search</Button>
            <Button endIcon={<SearchRoundedIcon/>} variant="contained" disableElevation>Search</Button>
             <IconButton size="small" onClick={() => alert(`Search Sucessfull`)}><SearchRoundedIcon/></IconButton>
            </Stack >
        </Stack>
    )
    
}
export default Muibutton