import { Button } from "@mui/material";
import { Component } from "react";
import { useParams ,useSearchParams} from "react-router-dom";

class Routeserviceid extends Component{
handler = () =>{
    this.props.setSearchParam({ filter: 'active'})
}
render(){
        return(
            <>
            <center><h1>Service Details {this.props.serviceid}</h1></center>
            <Button variant="contained" onClick={this.handler}>Active</Button>
            <Button variant="contained" onClick={ () => this.props.setSearchParam({ filter: 'a'})}>Reset</Button>
              
                {this.props.bool ? <h1>Showing active services</h1>  : <h1>Showing all services</h1>}
              
            </>
        )
    }
}

function Wrapperparam(){
    const params=useParams()
    const [searchParam,setSearchParam]=useSearchParams()
    const serviceid=params.serviceid
    const boolean=searchParam.get('filter') === 'active'
    return < Routeserviceid serviceid={serviceid} searchParams={searchParam}
        setSearchParam={setSearchParam} bool={boolean}/>


}
export default Wrapperparam
