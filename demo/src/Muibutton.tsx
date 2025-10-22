import { Button, Stack,IconButton ,ButtonGroup,ToggleButton,ToggleButtonGroup } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Block } from "@mui/icons-material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React,{useState, type MouseEventHandler} from "react";

function Muibutton(){
const[formats,setformat]=useState<string | null>(null)
const handleformatchange = (event:React.MouseEvent, Updatedformats:string | null) =>  {
setformat(Updatedformats)
}
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

            <Stack display={"block"}>
            <ButtonGroup variant="contained" orientation="horizontal" color="warning">
                <Button onClick={() => alert(`left clicked`)}>Left</Button>
                <Button onClick={() => alert(`Center clicked`)}>Center</Button>
                <Button onClick={() => alert(`right clicked`)}>Right</Button>
            </ButtonGroup>
            </Stack>

            <Stack display={"block"}>
            <ButtonGroup variant="outlined" orientation="vertical" color="secondary">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            </Stack>


            <Stack display={"block"}>
            <ToggleButtonGroup value={formats} onChange={handleformatchange} exclusive>
                <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
                <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>

                <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>

            </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
    
}
export default Muibutton