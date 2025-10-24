
// import { Radio } from '@mui/material'
// import {createTheme,colors,ThemeProvider} from '@mui/material'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Routehome from './Rountehome'
import RouteAbout from './RouteAbout'
import Login from './Login'
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
import RouteFproduct from './RouteFproduct'
import RouteFservice from './RouteFservice'
import RouteService from './Routeservice'
import Routeserviceid from './Routeserviceid'
import RouteDynamic from './RouteDynamic'
import Profile from './Profile'
import AuthProvider from './auth'
import Requireauth from './Requireauth'
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
  <AuthProvider>
     
    <MuiNav/>
     <Routes>
      <Route path='/' element={<Routehome/>}>
      {/* <Route index element={<RouteFproduct/>}/> */}
      <Route path='featuredproducts' element={<RouteFproduct/>}/>
      <Route path='featuredservices' element={<RouteFservice/>}/>
</Route>
    
      <Route path='products' element={<MuiCard/>}/>
      <Route path='about' element={<RouteAbout/>}/>
      <Route path='services' element={<RouteService/>}>
            <Route path=':serviceid' element={<Routeserviceid/>}/>
            <Route path='admin' element={<RouteDynamic/>}/>
      </Route>
      {/* <Route path='profile' element={<Wrapperrequireauth><Profile/></Wrapperrequireauth>}/> */}
      <Route  path='profile'  element={<Requireauth> <Profile/></Requireauth> }/>

      <Route path='login' element={<Login/>}/>

      <Route path='*' element={< RouteNomatch/>}/>
</Routes> 

     </AuthProvider>
    </>
   
   
   
//    {/* <ThemeProvider 
      
      
//       theme={theme}>
    
//      <MuiDrawer/>
    
//      <MuiSpeeddial/>
//        <MuiLayout/> */ }
//      {/* <MuiRadio/> */}
//      {/* <MuiSelect/> */}
//      {/* <Sx/> */}
//     {/* <Makestyles/> */}
//      {/* <Makestylesfun/> */}
//       {/* <Muitypo/> */}
//      {/* <Muibutton/> */}  {/* <MuiTextfield/> */}
//     {/* //   // </ThemeProvider> */}
   
  )
}

export default App
