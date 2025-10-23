
import { Radio } from '@mui/material'
import {createTheme,colors,ThemeProvider} from '@mui/material'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Routehome from './Rountehome'
import RouteAbout from './RouteAbout'
// import MuiSelect from './MuiSelect'
// import Muibutton from './Muibutton'
// import Muitypo from './Muitypography'
// import MuiTextfield from './MuiTextfield'
// import Makestyles from './Makestyles'
// import Sx from './Sx'
// import MuiRadio from './MuiRadio'
// import MuiLayout from './MuiLayout'
import MuiCard from './MuiCard'
import MuiNav from './MuiNav'
import RouteNomatch from './RouteNomatch'
// import MuiDrawer from './MuiDrawer'
// import MuiSpeeddial from './MuiSpeeddial'
 
// const theme=createTheme({
//   palette:{
//     secondary:{
//       main:colors.green[500]

      
//     }
//   }
// })


function App() {


  return (
  <>
    <MuiNav/>
     <Routes>
      {/* <Route path='/' element={<MuiNav/>}/> */}
    
      <Route path='products' element={<MuiCard/>}/>
      <Route path='about' element={<RouteAbout/>}/>
        <Route path='*' element={< RouteNomatch/>}/>
     
    </Routes> 
    
    </>
    // <ThemeProvider theme={theme}>
    // 
    // <MuiDrawer/>
    // 
    // <MuiSpeeddial/>
    /* <MuiLayout/> */
    // {/* <MuiRadio/> */}
    // {/* <MuiSelect/> */}
    // {/* <Sx/> */}
    // {/* <Makestyles/> */}
    // {/* <Makestylesfun/> */}
    //   {/* <Muitypo/> */}
    //   {/* <Muibutton/> */}
    //   {/* <MuiTextfield/> */}
    //   // </ThemeProvider>
    
  )
}

export default App
