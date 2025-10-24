import React, { Children, Component, createContext, useContext } from 'react'

const Authcontext=createContext(null)
class AuthProvider extends Component {
   state = {
         user:null
      }
       login= (user) => this.setState({user})

       logout= () => this.setState({user:null})


    
  render() {
    return (
      <Authcontext.Provider value={{
        user:this.state.user,
        login:this.login,
        logout:this.logout}}>{this.props.children}</Authcontext.Provider>
    )
  }
}
 export function useauth(){
    return useContext(Authcontext)
}
export default AuthProvider;
